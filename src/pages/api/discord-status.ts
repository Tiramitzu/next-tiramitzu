import type { NextApiRequest, NextApiResponse } from "next";
import { PresenceUpdateStatus, GatewayReceivePayload, GatewayOpcodes, GatewayDispatchEvents, GatewayGuildMembersChunkPresence, GatewayActivity } from "discord-api-types/v10";
import WebSocket from "ws";

// type WebsocketTypes = {
//     on(event: string, cb: (data: any) => void): void;
//     send(data: any): void;
//     readyState: typeof WebSocket.CONNECTING | typeof WebSocket.OPEN | typeof WebSocket.CLOSING | typeof WebSocket.CLOSED;
// };

let lastCachedStatus: PresenceUpdateStatus | null = null;
let lastCachedActivities: GatewayActivity[] = [];
let lastCachedTime = Date.now();

const token = process.env.DISCORD_TOKEN;
const userId = process.env.USER_ID || "397322976552550400"; // Fallback to old ID if env var not set
let ws: WebSocket;
let resumeData = {
    sessionId: "",
    resumeGatewayUrl: "",
    seq: 0
};
let authenticated = false;
let ready = false;
let isResumingSession = false;

function connectGateway(reconnect = true) {
    if (!token) return;

    isResumingSession = resumeData.sessionId && resumeData.resumeGatewayUrl && resumeData.seq && reconnect;

    if (isResumingSession) {
        console.info("Resuming session...");
        console.debug(`Session ID: ${resumeData.sessionId}`);
        console.debug(`Resume Gateway URL: ${resumeData.resumeGatewayUrl}`);
        console.debug(`Sequence: ${resumeData.seq}`);

        ws = new WebSocket(resumeData.resumeGatewayUrl);
    } else {
        ws = new WebSocket("wss://gateway.discord.gg/?v=10&encoding=json");
    }

    ws.on("open", () => {
        console.info("Connected to the Discord WSS.");
        if (isResumingSession) {
            ws.send(
                JSON.stringify({
                    op: GatewayOpcodes.Resume,
                    d: {
                        token,
                        session_id: resumeData.sessionId,
                        seq: resumeData.seq
                    }
                })
            );
        }
    });

    ws.on("message", (data: Buffer) => {
        const payload: GatewayReceivePayload = JSON.parse(data.toString()) as GatewayReceivePayload;
        const { op, d, s, t } = payload;
        resumeData.seq = s ?? resumeData.seq;

        switch (op) {
            case GatewayOpcodes.Hello:
                console.info("Hello event received. Starting heartbeat...");
                ws.send(
                    JSON.stringify({
                        op: GatewayOpcodes.Heartbeat,
                        d: s
                    })
                );
                console.debug("Heartbeat sent.");
                setInterval(() => {
                    ws.send(
                        JSON.stringify({
                            op: GatewayOpcodes.Heartbeat,
                            d: s
                        })
                    );
                }, d.heartbeat_interval);

                console.info("Heartbeat started.");
                break;
            case GatewayOpcodes.Heartbeat:
                console.debug("Discord requested an immediate heartbeat.");
                ws.send(
                    JSON.stringify({
                        op: GatewayOpcodes.Heartbeat,
                        d: s
                    })
                );
                console.debug("Heartbeat sent.");
                break;
            case GatewayOpcodes.HeartbeatAck:
                // If we're resuming, mark as authenticated on first HeartbeatAck
                if (isResumingSession) {
                    authenticated = true;
                    ready = true;
                    isResumingSession = false;
                    console.info("Session resumed successfully.");
                } else if (!authenticated) {
                    authenticated = true;
                    // GUILD_PRESENCES (256) + GUILD_MEMBERS (2) = 258
                    // GUILD_PRESENCES is required for presence updates
                    // GUILD_MEMBERS helps with member chunking and presence data
                    ws.send(
                        JSON.stringify({
                            op: GatewayOpcodes.Identify,
                            d: {
                                token,
                                properties: { os: "Android", browser: "Next Tiramitzu", device: "Next Tiramitzu" },
                                intents: 258 // GUILD_PRESENCES (256) | GUILD_MEMBERS (2)
                            }
                        })
                    );
                    console.info("Authenticating...");

                    if (!ready) {
                        ready = true;
                    }
                }
                break;
            case GatewayOpcodes.Dispatch:
                // If we're resuming and receive a Dispatch event, the resume was successful
                if (isResumingSession) {
                    authenticated = true;
                    ready = true;
                    isResumingSession = false;
                    console.info("Session resumed successfully.");
                }
                if (t === GatewayDispatchEvents.Ready) {
                    resumeData = {
                        sessionId: d.session_id,
                        resumeGatewayUrl: `${d.resume_gateway_url}?v=10&encoding=json`,
                        seq: s
                    };
                    console.info(`Logged in as ${d.user.username}${d.user.discriminator && d.user.discriminator !== "0" ? `#${d.user.discriminator}` : ""}`);
                    // Request initial presence data after Ready (with small delay to ensure gateway is ready)
                    setTimeout(() => {
                        console.info(`Requesting initial presence data for user ${userId}...`);
                        const requestPayload = {
                            op: 8, // Request Guild Members
                            d: {
                                guild_id: "578946750900076546",
                                user_ids: [userId],
                                presences: true,
                                limit: 1
                            }
                        };
                        console.debug("Sending request:", JSON.stringify(requestPayload));
                        if (ws && ws.readyState === WebSocket.OPEN) {
                            ws.send(JSON.stringify(requestPayload));
                        } else {
                            console.warn("WebSocket not open, cannot send presence request");
                        }
                    }, 1000); // Wait 1 second after Ready
                }

                if (t === GatewayDispatchEvents.PresenceUpdate) {
                    // Check if this is the user we're tracking
                    const updateUserId = d.user?.id;
                    if (updateUserId === userId) {
                        console.info(`✓ Presence update for tracked user: ${d.status} with ${d.activities?.length || 0} activities`);
                        lastCachedStatus = d.status as PresenceUpdateStatus;
                        lastCachedActivities = (d.activities as GatewayActivity[]) || [];
                        lastCachedTime = Date.now();
                    } else if (updateUserId) {
                        console.debug(`Presence update for different user: ${updateUserId}`);
                    }
                }

                if (t === GatewayDispatchEvents.GuildMembersChunk) {
                    console.info("GuildMembersChunk received:", {
                        members_count: d.members?.length || 0,
                        presences_count: d.presences?.length || 0
                    });
                    if (d.presences && d.presences.length > 0) {
                        d.presences.forEach((presence: GatewayGuildMembersChunkPresence) => {
                            console.debug("Presence in chunk:", {
                                user_id: presence.user?.id,
                                status: presence.status,
                                activities_count: presence.activities?.length || 0
                            });
                            if (presence.user?.id === userId) {
                                console.info(`✓ Found tracked user in chunk: ${presence.status} with ${presence.activities?.length || 0} activities`);
                                lastCachedStatus = presence.status as PresenceUpdateStatus;
                                lastCachedActivities = (presence.activities as GatewayActivity[]) || [];
                                lastCachedTime = Date.now();
                            }
                        });
                    } else {
                        console.warn("GuildMembersChunk received but no presences found");
                    }
                }

                break;
            case GatewayOpcodes.Reconnect: {
                console.info("Reconnecting...");
                connectGateway();
                break;
            }
            case GatewayOpcodes.InvalidSession:
                console.warn("Invalid session.");
                // If we were trying to resume, mark that it failed
                if (isResumingSession) {
                    isResumingSession = false;
                }
                if (d) {
                    console.info("Can retry, reconnecting...");
                    connectGateway();
                } else {
                    console.error("Cannot retry, clearing session data and reconnecting...");
                    resumeData = {
                        sessionId: "",
                        resumeGatewayUrl: "",
                        seq: 0
                    };
                    connectGateway(false);
                }
                break;
            default:
                console.warn("Unhandled opcode:", op);
                break;
        }
    });

    ws.on("error", (error) => {
        console.error("WebSocket error:", error);
    });

    ws.on("close", (code, reason) => {
        console.warn(`WebSocket closed: ${code} ${reason.toString()}`);
        authenticated = false;
        ready = false;
        // Attempt to reconnect after a delay
        if (code !== 1000) {
            setTimeout(() => {
                console.info("Attempting to reconnect...");
                connectGateway();
            }, 5000);
        }
    });
}

if (!ws && !ready) {
    if (!userId) {
        console.error("⚠ USER_ID environment variable is not set! Presence tracking will not work.");
    } else {
        console.info(`Connecting to Discord gateway... (Tracking user: ${userId})`);
    }
    connectGateway();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    if (!token) {
        return res.status(400).json({ error: "Missing Discord token in environment." });
    }

    // Return cached data only - updates come from WebSocket PresenceUpdate events
    // If not authenticated or no cached status, return offline
    if (!authenticated || !lastCachedStatus) {
        return res.status(200).json({ 
            status: PresenceUpdateStatus.Offline, 
            activities: [],
            cached: false
        });
    }

    // Return cached status and activities
    return res.status(200).json({ 
        status: lastCachedStatus, 
        activities: lastCachedActivities,
        cached: true,
        cacheAge: Date.now() - lastCachedTime
    });
}
