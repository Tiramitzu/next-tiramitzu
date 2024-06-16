import { faAndroid, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

import projectList from "components/Projects";
import Page from "components/layout/Page";

const Projects = () => {
	return (
		<Page className="flex flex-col">
			<section id="projects" className="px-4 mx-auto mb-60 max-w-6xl sm:px-6 lg:px-4">
				<div className="pb-12 text-center">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-tertiary dark:text-primary">
						Projects
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
					{projectList.map(project => (
						<div
							className="flex flex-col justify-center items-center p-12 w-full rounded-lg shadow-lg duration-500 hover:scale-110 group bg-primary text-tertiary dark:text-primary dark:bg-tertiary"
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
