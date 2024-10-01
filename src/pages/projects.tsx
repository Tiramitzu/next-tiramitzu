import { FaGlobe } from "react-icons/fa6";

import { GetPublicRepositoriesQuery, GetRepositoriesContributedToQuery } from "generated/graphql";
import { RepositoryCard } from "components/RepositoryCard";
import projectList from "lib/projects";
import Page from "components/layout/Page";

const Projects = ({ data, data1 }: { data: GetPublicRepositoriesQuery; data1: GetRepositoriesContributedToQuery }) => {
	if (!data || !data1) {
		return <Page>Loading...</Page>;
	} else {

		return (
			<Page className="flex flex-col">
				<section id="projects" className="px-4 mx-auto mb-60 max-w-6xl sm:px-6 lg:px-4">
					<div className="pb-12 text-center">
						<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-tertiary dark:text-primary">
							Projects
						</h1>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
						{projectList.map(project => {
							const repo = data.viewer.repositories.nodes.find(x => x.url === project.github);
							const repo1 = data1.viewer.repositoriesContributedTo.nodes.find(x => x.url === project.github);

							return (
								<div
									className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg duration-500 hover:scale-110 group bg-primary text-tertiary dark:text-primary dark:bg-tertiary"
									key={project.name}>
									{repo ? (
										<RepositoryCard repository={repo} />
									) : repo1 ? (
										<RepositoryCard repository={repo1} />
									) : null}
									<div className="flex flex-row justify-center items-center m-5">
										<p className="mr-2 text-xl font-bold">{project.name}</p>
										{project.web ? (
											<div aria-label="Web" role="img">
												<a href={project.web} target="_blank" rel="noopener noreferrer">
													<button
														type="button"
														className="p-1 text-base font-semibold text-center align-middle rounded-lg transition duration-100 ease-in focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-quaternary hover:bg-secondary focus:ring-neutral-200 focus:ring-offset-neutral-200">
														<FaGlobe />
													</button>
												</a>
											</div>
										) : null}
									</div>
								</div>
							)
						})}
					</div>
				</section>
			</Page>
		);
	}
};

export default Projects;
