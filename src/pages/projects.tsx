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
		name: "SMK N 1 Ciomas",
		description: "My school website. Built purely using HTML and CSS.",
		github: "https://github.com/tiramitzu/smkn1ciomas",
		web: "https://skanic.tira.my.id"
	},
	{
		name: "SkanicBills",
		description: "A simple school bills management app. Built with Flutter for my school assignment.",
		github: "https://github.com/tiramitzu/skanicbills",
		apk: "https://syah.cods3.com"
	},
	{
		name: "Discord Channel Mirror",
		description: "As the name stated, it's a discord tool to mirror a discord channel to your desired channel.",
		github: "https://github.com/clytage/discord-chat-mirror"
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
			className="flex flex-col">
			<section id="projects" className="px-4 mx-auto mb-60 max-w-6xl sm:px-6 lg:px-4">
				<div className="pb-12 text-center">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-tertiary dark:text-primary">
						Projects
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
					{projects.map(project => (
						<div
							className="flex flex-col justify-center items-center p-12 w-full rounded-lg bg-primary text-tertiary sahdow-lg dark:text-primary dark:bg-tertiary"
							key={project.name}>
							<div className="flex flex-row justify-center items-center mb-5">
								<p className="mr-2 text-xl font-bold">{project.name}</p>
								{project.github ? (
									<div aria-label="Github" role="img">
										<a href={project.github} target="_blank" rel="noopener noreferrer">
											<button
												type="button"
												className="p-2 w-full text-base font-semibold text-center rounded-lg transition duration-200 ease-in focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-quaternary hover:bg-secondary focus:ring-neutral-200 focus:ring-offset-neutral-200">
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
												className="p-2 w-full text-base font-semibold text-center rounded-lg transition duration-200 ease-in focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-quaternary hover:bg-secondary focus:ring-neutral-200 focus:ring-offset-neutral-200">
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
												className="p-2 w-full text-base font-semibold text-center rounded-lg transition duration-200 ease-in focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-quaternary hover:bg-secondary focus:ring-neutral-200 focus:ring-offset-neutral-200">
												<FontAwesomeIcon icon={faAndroid} size="2x" />
											</button>
										</a>
									</div>
								) : null}
							</div>
							<div className="flex flex-row text-sm text-center">{project.description}</div>
						</div>
					))}
				</div>
			</section>
		</Page>
	);
};

export default Projects;
