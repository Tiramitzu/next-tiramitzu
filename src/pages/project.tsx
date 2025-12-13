import { GetPublicRepositoriesQuery, GetRepositoriesContributedToQuery } from "generated/graphql";
import Image from "next/image";
import Page from "components/layout/Page";
import projectList from "lib/projects";

const Projects = ({ data, data1 }: { data: GetPublicRepositoriesQuery; data1: GetRepositoriesContributedToQuery }) => {
    if (!data || !data1) {
        return <Page>Loading...</Page>;
    } else {
        return (
            <Page className="flex flex-col">
                <section id="projects" className="px-4 mx-auto mb-60 max-w-6xl sm:px-6 lg:px-4">
                    <div className="pb-12 text-center">
                        <h1 className="text-5xl font-bold">Projects</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {projectList.map(project => {
                            const repo = data.viewer.repositories.nodes.find(x => x.url === project.github);
                            const repo1 = data1.viewer.repositoriesContributedTo.nodes.find(x => x.url === project.github);

                            return (
                                <div className="shadow-sm card bg-base-100" key={project.name}>
                                    <figure>
                                        <Image src={repo ? repo.openGraphImageUrl : repo1 ? repo1.openGraphImageUrl : null} alt={project.name} width={2048} height={2048} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.name}</h2>
                                        <div className="justify-end card-actions">
                                            {repo
                                                ? repo.languages.nodes.map(lang => (
                                                      <div className="badge badge-outline" key={lang.name}>
                                                          {lang.name}
                                                      </div>
                                                  ))
                                                : repo1
                                                ? repo1.languages.nodes.map(lang => (
                                                      <div className="badge badge-outline" key={lang.name}>
                                                          {lang.name}
                                                      </div>
                                                  ))
                                                : null}
                                        </div>
                                        <div className="justify-end mt-5 card-actions">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <button className="btn btn-soft btn-primary">View on GitHub</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </Page>
        );
    }
};

export default Projects;
