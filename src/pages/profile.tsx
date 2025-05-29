import React, { useState, useEffect } from "react";
import Discord from "discord-api-types/v10";
import Image from "next/image";

import Page from "components/layout/Page";
import { TbCake, TbDownload, TbMail, TbGlobe, TbBrandLinkedin, TbPhone } from "react-icons/tb";

const Profile = ({ user, error }: { user: Discord.APIUser; error: string | null }) => {
    const [data, setData] = useState<number | null>(null);
    const [status, setStatus] = useState<"online" | "idle" | "dnd" | "offline" | "invisible" | null>(null);

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

    useEffect(() => {
        // Fetch Discord status every 10 seconds
        const fetchStatus = () => {
            fetch("/api/discord-status")
                .then(res => res.json())
                .then(data => setStatus(data.status))
                .catch(() => setStatus(null));
        };
        fetchStatus();
        const interval = setInterval(fetchStatus, 10000);
        return () => clearInterval(interval);
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    let statusString = "Unknown";
    let statusColor = "status-neutral";
    let ringColor = "ring-neutral";
    if (status === "online") {
        statusString = "Online";
        statusColor = "status-success";
        ringColor = "ring-success";
    } else if (status === "idle") {
        statusString = "Idle";
        statusColor = "status-warning";
        ringColor = "ring-warning";
    } else if (status === "dnd") {
        statusString = "Do Not Disturb";
        statusColor = "status-error";
        ringColor = "ring-error";
    } else if (status === "offline" || status === "invisible" || status === null) {
        statusString = "Offline";
        statusColor = "status-neutral";
        ringColor = "ring-neutral";
    }

    return (
        <Page className="flex flex-col">
            <section id="profile" className="px-4 mx-auto mt-20 max-w-6xl sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-12 text-center">
                    <h1 className="text-5xl font-bold">My Profile</h1>
                </div>
                <div className="flex flex-col justify-center py-10 md:flex-row md:items-center">
                    <div className="flex flex-col justify-center items-center pb-10 md:pb-0">
                        <div className="tooltip" data-tip="Discord Status">
                            <div className="items-center tooltip-content">
                                <div className="mr-2 inline-grid *:[grid-area:1/1] ">
                                    <div className={`status ${statusColor} animate-ping`}></div>
                                    <div className={`status ${statusColor}`}></div>
                                </div>
                                <span className="mt-2">Currently {statusString} on Discord</span>
                            </div>
                            <div className="mt-4 avatar">
                                <div className={`w-46 h-46 rounded-full ring-5 ring-offset-2 ring-offset-base-100 ${ringColor}`}>
                                    <Image
                                        src={
                                            user?.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?format=webp&quality=lossless` : "/static/favicon.ico"
                                        }
                                        alt="Tiramitzu AKA Syah Warid Ghani Akram"
                                        height={256}
                                        width={256}
                                        className="rounded-full"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 shadow-sm card bg-base-100">
                        <div className="card-body">
                            <span className="badge badge-xs badge-warning">Full Stack Developer</span>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Syah Warid Ghani Akram</h2>
                            </div>
                            <ul className="flex flex-col gap-2 items-start mt-6 text-xs">
                                <li>
                                    <TbGlobe className="inline-block text-success size-4 me-2" />
                                    <span>Bogor, Indonesia</span>
                                </li>
                                <li>
                                    <TbCake className="inline-block text-success size-4 me-2" />
                                    <span>28 July, 2006 ({data ? `${data}` : "??"} years old)</span>
                                </li>
                                <br />
                                <li>
                                    <span>
                                        Co-Founder & Director at{" "}
                                        <a href="https://stegripe.org/" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
                                            PT Nusantara Digital Kolektif
                                        </a>
                                    </span>
                                </li>
                                <br />
                                <li>
                                    <TbMail className="inline-block text-success size-4 me-2" />
                                    <span>
                                        E-Mail:{" "}
                                        <a href="mailto:syah@tira.my.id" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
                                            syah@tira.my.id
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <TbPhone className="inline-block text-success size-4 me-2" />
                                    <span>
                                        Phone:{" "}
                                        <a href="https://wa.me/+6285156958090" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
                                            +62 851-5695-8090
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <TbBrandLinkedin className="inline-block text-success size-4 me-2" />
                                    <span>
                                        Linkedin:{" "}
                                        <a href="https://www.linkedin.com/in/tiramitzu/" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
                                            Syah Warid Ghani Akram
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-soft btn-primary">
                                    <a href={"/static/ResumeEN.pdf"} target="_blank" rel="noopener noreferrer" download="CV-SyahWarid">
                                        <TbDownload className="inline-block mr-2" /> Download Resume (English) [Outdated]
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    );
};

export default Profile;
