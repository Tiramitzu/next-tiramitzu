import { TbGlobe, TbCake, TbMail, TbBrandLinkedin, TbDownload, TbBrandWhatsapp } from "react-icons/tb";

export default function CardInfo({ data }: { data: number }) {

    return (
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
                        Co-Founder & Projects Developer at{" "}
                        <a href="https://stegripe.org/" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
                            PT Stegripe Group Indonesia
                        </a>
                    </span>
                </li>
                <br />
                <li>
                    <TbMail className="inline-block text-success size-4 me-2" />
                    <span>
                        E-Mail:{" "}
                        <a href="mailto:syahwarid404@gmail.com" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
                            syahwarid404@gmail.com
                        </a>
                    </span>
                </li>
                <li>
                    <TbBrandWhatsapp className="inline-block text-success size-4 me-2" />
                    <span>
                        WhatsApp:{" "}
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
    );
}