// import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

export const RepositoryCard = ({ repository }) => (
    <a href={repository.url} target="_blank" rel="noopener noreferrer">
        <div>
            <Image src={repository.openGraphImageUrl} alt={repository.name} height={150} width={300} className="rounded-t-lg duration-200 group-hover:opacity-20" priority />
            {/* <div className="flex absolute top-1/4 flex-row gap-2 justify-center items-center w-full opacity-0 duration-200 group-hover:opacity-100">
                <p className="text-lg font-bold text-tertiary dark:text-primary">View Project</p>
                <FaArrowRight className="my-auto text-lg text-tertiary dark:text-primary" />
            </div> */}
        </div>
    </a>
);