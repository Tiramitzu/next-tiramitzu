import type { NextApiRequest, NextApiResponse } from "next";
import { PresenceUpdateStatus, GatewayReceivePayload, GatewayOpcodes, GatewayDispatchEvents, GatewayGuildMembersChunkPresence } from "discord-api-types/v10";
import WebSocket from "ws";

// type WebsocketTypes = {
//     on(event: string, cb: (data: any) => void): void;
//     send(data: any): void;
//     readyState: typeof WebSocket.CONNECTING | typeof WebSocket.OPEN | typeof WebSocket.CLOSING | typeof WebSocket.CLOSED;
// };

let lastCachedStatus: PresenceUpdateStatus | null = null;
const nonce = Math.random().toString(36).slice(2);
let lastCachedTime = Date.now();
let cacheTime = 60 * 1000; // 60 seconds

const token = process.env.DISCORD_TOKEN;
const userId = "397322976552550400";
let ws: WebSocket;
let resumeData = {
    sessionId: "",
    resumeGatewayUrl: "",
    seq: 0
};
let authenticated = false;
let ready = false;

function connectGateway(reconnect = true) {
    if (!token) return;

    if (resumeData.sessionId && resumeData.resumeGatewayUrl && resumeData.seq && reconnect) {
        console.info("Resuming session...");
        console.debug(`Session ID: ${resumeData.sessionId}`);
        console.debug(`Resume Gateway URL: ${resumeData.resumeGatewayUrl}`);
        console.debug(`Sequence: ${resumeData.seq}`);

        ws = new WebSocket(resumeData.resumeGatewayUrl);
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
    } else {
        ws = new WebSocket("wss://gateway.discord.gg/?v=10&encoding=json");
    }

    ws.on("open", () => {
        console.info("Connected to the Discord WSS.");
    });

    ws.on("message", (data: Buffer) => {
        const payload: GatewayReceivePayload = JSON.parse(data.toString()) as GatewayReceivePayload;
        const { op, d, s, t } = payload;
        resumeData.seq = s ?? resumeData.seq;

        // Append payload to log file
        // try {
        //     const logPath = path.resolve(process.cwd(), "discord-gateway.log");
        //     fs.appendFileSync(logPath, JSON.stringify(payload) + "\n");
        // } catch (e) {
        //     console.error("Failed to write to log file:", e);
        // }

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
                if (!authenticated) {
                    authenticated = true;
                    ws.send(
                        JSON.stringify({
                            op: GatewayOpcodes.Identify,
                            d: {
                                token,
                                properties: { os: "android", browser: "dcm", device: "dcm" },
                                intents: Number("256")
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
                if (t === GatewayDispatchEvents.Ready) {
                    resumeData = {
                        sessionId: d.session_id,
                        resumeGatewayUrl: `${d.resume_gateway_url}?v=10&encoding=json`,
                        seq: s
                    };
                    console.info(`Logged in as ${d.user.username}${d.user.discriminator && d.user.discriminator !== "0" ? `#${d.user.discriminator}` : ""}`);
                }

                if (t === GatewayDispatchEvents.PresenceUpdate && d.user.id === userId) {
                    lastCachedStatus = d.status as PresenceUpdateStatus;
                }

                if (t === GatewayDispatchEvents.GuildMembersChunk) {
                    if (d.presences) {
                        d.presences.forEach((presence: GatewayGuildMembersChunkPresence) => {
                            if (presence.user.id === userId) {
                                lastCachedStatus = presence.status as PresenceUpdateStatus;
                                lastCachedTime = Date.now();
                            }
                        });
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
                if (d) {
                    console.info("Can retry, reconnecting...");
                    connectGateway();
                } else {
                    console.error("Cannot retry, exiting...");
                    connectGateway(false);
                }
                break;
            default:
                console.warn("Unhandled opcode:", op);
                break;
        }
    });
}

if (!ws && !ready) {
    console.info("Connecting to Discord gateway...");
    connectGateway();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    if (!token) {
        return res.status(400).json({ error: "Missing Discord token in environment." });
    }
    if (ws && ready && (Date.now() - lastCachedTime >= cacheTime || lastCachedStatus === PresenceUpdateStatus.Offline || lastCachedStatus === null)) {
        ws.send(
            JSON.stringify({
                op: 8,
                d: {
                    guild_id: "578946750900076546",
                    user_ids: [userId],
                    presences: true,
                    limit: 1,
                    nonce
                }
            })
        );
    }

    // If not authenticated or no status for this user, return offline
    if (!authenticated || !lastCachedStatus) {
        // console.log(`User ${userId} not found or gateway not authenticated.`);
        return res.status(200).json({ status: PresenceUpdateStatus.Offline });
    }
    return res.status(200).json({ status: lastCachedStatus });
}
