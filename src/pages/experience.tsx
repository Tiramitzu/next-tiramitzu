import Page from "components/layout/Page";
import experienceList from "lib/experiences";
import { TbCircle } from "react-icons/tb";

const Experience = () => {
    return (
        <Page>
            <section id="experiences" className="px-4 mx-auto mb-60 max-w-6xl sm:px-6 lg:px-4">
                <div className="pb-12 text-center">
                    <h1 className="text-5xl font-bold">Past Experiences</h1>
                </div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {experienceList.map((experience, index) => (
                        <li key={index}>
                            <div className="timeline-middle">
                                <TbCircle
                                    className={`text-xl text-primary mb-2`}
                                    />
                            </div>
                            <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10 md:text-${index % 2 === 0 ? "end" : "start"}`}>
                                {index % 2 === 0 && (
                                    <span className={`badge badge-primary badge-outline mb-2 mx-5 text-sm font-semibold hidden lg:inline-block`}>
                                        {experience.workType} - {experience.type}
                                    </span>
                                )}
                                <time className="font-mono italic">
                                    {new Date(experience.from).toLocaleDateString("en-US", { year: "numeric", month: "long" })} -{" "}
                                    {experience.to !== "Present" ? new Date(experience.to).toLocaleDateString("en-US", { year: "numeric", month: "long" }) : "Present"}
                                </time>
                                {index % 2 === 0 && (
                                    <span className="mx-5 mb-2 text-sm font-semibold lg:hidden badge badge-primary badge-outline">
                                        {experience.workType} - {experience.type}
                                    </span>
                                )}
                                {index % 2 !== 0 && (
                                    <span className="mx-5 mb-2 text-sm font-semibold badge badge-primary badge-outline">
                                        {experience.workType} - {experience.type}
                                    </span>
                                )}
                                <div className="text-lg font-black">{experience.title}</div>
                                <div className="font-black text-md">At {experience.company}</div>
                                <div className="text-md text-primary">{experience.description}</div>
                                <div className="mt-2 text-xs text-primary">
                                    {experience.location && (
                                        <span>
                                            <strong>Location:</strong> {experience.location}
                                        </span>
                                    )}
                                </div>
                            </div>
                            {index < experienceList.length - 1 && <hr />}
                        </li>
                    ))}
                </ul>
            </section>
        </Page>
    );
};

export default Experience;
