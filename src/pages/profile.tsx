import React, { useState, useEffect } from "react";
import Image from "next/image";

import Page from "components/layout/Page";
import { FaCakeCandles, FaDownload, FaEnvelope, FaGlobe, FaLinkedin, FaPhone } from "react-icons/fa6";

const Profile = () => {
	const [data, setData] = useState(null);

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

	return (
		<Page className="flex flex-col">
			<section id="profile" className="px-4 mx-auto mt-20 max-w-6xl sm:px-6 lg:py-16 lg:px-8">
				<div className="pb-12 text-center">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-tertiary dark:text-primary">
						My Profile
					</h1>
				</div>
				<div className="flex flex-row justify-center py-10 mobile:flex-col mobile:items-center">
					<div className="duration-500 hover:scale-110 mobile:mb-10 mobile:w-1/2 mobile:h-1/2">
						<Image
							src="/static/favicon.ico"
							alt="Tiramitzu AKA Syah Warid Ghani Akram"
							height={256}
							width={256}
							className="rounded-full"
							priority
						/>
					</div>
					<div className="flex flex-col ml-10 text-left text-quaternary dark:text-secondary">
						<div className="flex flex-row duration-500 hover:scale-110">
							<h1 className="text-xl font-bold text-tertiary dark:text-primary">Syah Warid Ghani Akram</h1>
							<p className="ml-1 text-xs">aka Tiramitzu</p>
						</div>
						<p className="duration-500 hover:scale-110">Full Stack Developer</p>
						<br />
						<p className="flex flex-row gap-2 duration-500 hover:scale-110">
							<FaGlobe className="my-auto" /> Bogor, Indonesia
						</p>
						<p className="flex flex-row gap-2 duration-500 hover:scale-110">
							<FaCakeCandles className="my-auto" /> 28 July, 2006 ({data ? `${data}` : "??"} years old)
						</p>
						<br />
						<p className="duration-500 hover:scale-110">
							Currently active partaking in{" "}
							<a
								href="https://stegripe.org/"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								Stegripe
							</a>{" "}
							as the Core Team
						</p>
						<br />
						<p className="flex flex-row gap-2 duration-500 hover:scale-110">
							<FaEnvelope className="my-auto" /> E-Mail:{" "}
							<a
								href="mailto:syah@tira.my.id"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								syah@tira.my.id
							</a>
						</p>
						<p className="flex flex-row gap-2 duration-500 hover:scale-110">
							<FaPhone className="my-auto" /> Phone:{" "}
							<a
								href="https://wa.me/+6285156958090"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								+62 851-5695-8090
							</a>
						</p>
						<p className="flex flex-row gap-2 duration-500 hover:scale-110">
							<FaLinkedin className="my-auto" /> Linkedin:{" "}
							<a
								href="https://www.linkedin.com/in/tiramitzu/"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								Syah Warid Ghani Akram
							</a>
						</p>
					</div>
				</div>
				<div className="flex flex-row justify-evenly mt-5 mb-60">
					{/* <a href={"/static/CVID.pdf"} target="_blank" rel="noopener noreferrer" download="CV-SyahWarid.pdf">
						<button className="py-2 px-4 text-sm font-semibold rounded-lg transition duration-500 ease-in-out hover:scale-110 text-primary bg-tertiary dark:hover:opacity-70 dark:hover:bg-tertiary dark:hover:text-primary hover:bg-quaternary">
							Download CV (Bahasa Indonesia)
						</button>
					</a> */}
					<a href={"/static/ResumeEN.pdf"} target="_blank" rel="noopener noreferrer" download="CV-SyahWarid">
						<button className="flex flex-row gap-2 py-2 px-4 ml-4 text-sm font-semibold rounded-lg transition duration-500 ease-in-out hover:scale-110 text-primary bg-tertiary dark:hover:opacity-70 dark:hover:bg-tertiary dark:hover:text-primary hover:bg-quaternary">
							<FaDownload className="my-auto" /> Resume (English)
						</button>
					</a>
				</div>
			</section>
		</Page>
	);
};

export default Profile;
