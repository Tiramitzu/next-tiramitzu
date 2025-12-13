import React, { useState, useEffect } from "react";
import Discord, { PresenceUpdateStatus, GatewayActivity } from "discord-api-types/v10";
import Image from "next/image";

import Page from "components/layout/Page";
import CardInfo from "components/CardInfo";

const Profile = ({ user, status, activities }: { user: Discord.APIUser; status: PresenceUpdateStatus; activities?: GatewayActivity[] }) => {
    const [data, setData] = useState<number | null>(null);
    const [currentStatus, setCurrentStatus] = useState<PresenceUpdateStatus>(status);
    const [currentActivities, setCurrentActivities] = useState<GatewayActivity[]>(activities || []);

    useEffect(() => {
        const fetchData = async () => {
            const curDate = Date.now();
            const birthDate = new Date(2006, 6, 28).getTime();

            const result = Math.floor((curDate - birthDate) / 31557600000);
            setData(result);
        };

        fetchData().catch(e => {
            // handle the error as needed
            console.error("An error occurred while fetching the data: ", e);
        });
    }, []);

    // Poll for Discord status updates
    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await fetch("/api/discord-status");
                if (res.ok) {
                    const statusData = await res.json();
                    setCurrentStatus(statusData.status || PresenceUpdateStatus.Offline);
                    setCurrentActivities(statusData.activities || []);
                }
            } catch (error) {
                console.error("Failed to fetch Discord status:", error);
            }
        };

        // Fetch immediately
        fetchStatus();

        // Then poll every 5 seconds
        const interval = setInterval(fetchStatus, 5000);
        return () => clearInterval(interval);
    }, []);

    let statusColor = "status-neutral";
    let ringColor = "ring-neutral";
    if (currentStatus === PresenceUpdateStatus.Online) {
        statusColor = "status-success";
        ringColor = "ring-success";
    } else if (currentStatus === PresenceUpdateStatus.Idle) {
        statusColor = "status-warning";
        ringColor = "ring-warning";
    } else if (currentStatus === PresenceUpdateStatus.DoNotDisturb) {
        statusColor = "status-error";
        ringColor = "ring-error";
    } else if (currentStatus === PresenceUpdateStatus.Offline || currentStatus === PresenceUpdateStatus.Invisible || currentStatus === null) {
        statusColor = "status-neutral";
        ringColor = "ring-neutral";
    }
    const customStatus = currentActivities?.find(a => a.type === 4);
    const richPresence = currentActivities?.filter(a => a.type === 0) || [];

    return (
        <Page className="flex flex-col">
            <section id="profile" className="px-4 mx-auto mt-20 max-w-6xl sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-12 text-center">
                    <h1 className="text-5xl font-bold">My Profile</h1>
                </div>
                <div className="flex flex-col justify-center py-10 md:flex-row md:items-center">
                    <div className="flex flex-col justify-center items-center pb-10 md:pb-0">
                        <div className="tooltip tooltip-bottom" data-tip="">
                            <div className="tooltip-content text-left max-w-sm bg-base-200 dark:bg-base-800 rounded-lg p-2 text-xs">
                                {/* Custom Status */}
                                {customStatus && (
                                    <div className="flex items-center gap-2 text-sm mb-3 pb-2 border-b border-base-300 dark:border-base-700">
                                        {customStatus.emoji && (
                                            <span className="flex-shrink-0">
                                                {customStatus.emoji.id ? (
                                                    <Image
                                                        src={`https://cdn.discordapp.com/emojis/${customStatus.emoji.id}.${customStatus.emoji.animated ? "gif" : "webp"}`}
                                                        alt={customStatus.emoji.name || ""}
                                                        width={16}
                                                        height={16}
                                                        className="inline-block"
                                                    />
                                                ) : (
                                                    <span className="text-base">{customStatus.emoji.name}</span>
                                                )}
                                            </span>
                                        )}
                                        <span className="text-base-content/80">{customStatus.state}</span>
                                    </div>
                                )}

                                {/* Rich Presence Activities */}
                                {richPresence.length > 0 && (
                                    <div className="space-y-2">
                                        {richPresence.map((activity, idx) => {
                                            let largeImageUrl = "";
                                            let smallImageUrl = "";

                                            if (activity.assets?.large_image) {
                                                if (activity.assets.large_image.startsWith("mp:external/")) {
                                                    const parts = activity.assets.large_image.split("/");
                                                    const protocol = parts[2];
                                                    const urlPath = parts.slice(3).join("/");
                                                    largeImageUrl = `${protocol}://${urlPath}`;
                                                } else {
                                                    largeImageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
                                                }
                                            }

                                            if (activity.assets?.small_image) {
                                                if (activity.assets.small_image.startsWith("mp:external/")) {
                                                    const parts = activity.assets.small_image.split("/");
                                                    const protocol = parts[2];
                                                    const urlPath = parts.slice(3).join("/");
                                                    smallImageUrl = `${protocol}://${urlPath}`;
                                                } else {
                                                    smallImageUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.small_image}.png`;
                                                }
                                            }

                                            return (
                                                <div key={activity.id || idx} className="flex items-start gap-2">
                                                    {activity.assets?.large_image && (
                                                        <div className="flex-shrink-0 relative">
                                                            <Image
                                                                src={largeImageUrl}
                                                                alt={activity.assets.large_text || activity.name}
                                                                width={48}
                                                                height={48}
                                                                className="rounded object-cover"
                                                            />
                                                            {activity.assets?.small_image && (
                                                                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-base-200 dark:border-base-800 overflow-hidden">
                                                                    <Image
                                                                        src={smallImageUrl}
                                                                        alt={activity.assets.small_text || ""}
                                                                        width={16}
                                                                        height={16}
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-semibold text-base-content mb-0.5 truncate">{activity.name}</div>
                                                        {activity.details && (
                                                            <div className="text-base-content/80 mb-0.5 truncate text-xs">{activity.details}</div>
                                                        )}
                                                        {activity.state && (
                                                            <div className="text-base-content/60 truncate text-xs">{activity.state}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className="mt-4 avatar relative">
                                <div className={`w-46 h-46 rounded-full ring-4 ${ringColor} relative`}>
                                    <Image
                                        src={user?.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?format=webp&quality=lossless&size=512` : "/static/favicon.ico"}
                                        alt="Tiramitzu AKA Syah Warid Ghani Akram"
                                        height={256}
                                        width={256}
                                        className="rounded-full"
                                        priority
                                    />
                                    <div className="absolute bottom-2 right-2 inline-grid *:[grid-area:1/1]">
                                        <div className={`status ${statusColor} animate-ping`}></div>
                                        <div className={`status ${statusColor}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 card flex flex-col items-center">
                        <CardInfo
                            data={data}
                        />
                    </div>
                </div>
            </section>
        </Page>
    );
};

export default Profile;
