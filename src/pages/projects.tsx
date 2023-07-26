import { faAndroid, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import Page from "components/layout/Page";

const projects = [
	{
		name: "Next Tiramitzu",
		description: "It is this project open source / code. Next.js based project written in TSX.",
		github: "https://github.com/tiramitzu/next-tiramitzu"
	},
	{
		name: "SMK Negeri 1 Ciomas",
		description: "My school website. Built purely using HTML and CSS.",
		web: "https://skanic.tira.my.id"
	},
	{
		name: "SkanicBills",
		description: "A simple school bills management app. Built with Flutter for my school assignment.",
		web: "https://bills.tira.my.id",
		apk: "https://syah.cods3.com"
	},
	{
		name: "Discord Channel Mirror",
		description: "As the name stated, it's a discord tool to mirror a discord channel to your desired channel.",
		github: "https://github.com/clytage/discord-chat-mirror"
	},
	{
		name: "Rawon",
		description: "A simple powerful Discord music bot built to fulfill your production desires.",
		github: "https://github.com/clytage/rawon"
	},
	{
		name: "WhatsApp Bot",
		description: "A simple WhatsApp bot built using Node.js.",
		github: "https://github.com/clytage/whatsapp-bot"
	}
];

const Projects = () => {
	return (
		<Page
			title="Tiramitzu's Project"
			className="flex flex-col justify-center items-center"
			mainClassName=" items-center justify-center">
			<section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mb-60">
				<div className="text-center pb-12">
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-tertiary dark:text-primary">
						Projects
					</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map(project => (
						<div
							className="w-full bg-secondary text-tertiary dark:text-primary rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center dark:bg-tertiary"
							key={project.name}>
							<div className="flex flex-row items-center justify-center mb-5">
								<p className="text-xl font-bold mr-2">{project.name}</p>
								{project.github ? (
									<div aria-label="Github" role="img">
										<a href={project.github} target="_blank" rel="noopener noreferrer">
											<button
												type="button"
												className="p-2 hover:bg-violet-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
												<FontAwesomeIcon icon={faGithub} size="2x" />
											</button>
										</a>
									</div>
								) : null}
								{project.web ? (
									<div aria-label="Web" role="img">
										<a href={project.web} target="_blank" rel="noopener noreferrer">
											<button
												type="button"
												className="p-2 hover:bg-violet-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
												<FontAwesomeIcon icon={faGlobeAsia} size="2x" />
											</button>
										</a>
									</div>
								) : null}
								{project.apk ? (
									<div aria-label="Apk" role="img">
										<a href={project.apk} target="_blank" rel="noopener noreferrer">
											<button
												type="button"
												className="p-2 hover:bg-violet-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
												<FontAwesomeIcon icon={faAndroid} size="2x" />
											</button>
										</a>
									</div>
								) : null}
							</div>
							<div className="text-center flex flex-row text-sm">{project.description}</div>
						</div>
					))}
				</div>
			</section>
		</Page>
	);
};

export default Projects;
