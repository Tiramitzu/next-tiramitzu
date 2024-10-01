import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

export const RepositoryCard = ({ repository }) => (
    <a href={repository.url} target="_blank" rel="noopener noreferrer">
        <div>
            <Image src={repository.openGraphImageUrl} alt={repository.name} height={150} width={300} className="rounded-t-lg duration-200 group-hover:opacity-20" priority />
            <div className="absolute top-1/4 w-full duration-200 flex flex-row gap-2 justify-center items-center opacity-0 group-hover:opacity-100">
                <p className="text-lg font-bold dark:text-primary text-tertiary">View Project</p>
                <FaArrowRight className="text-lg dark:text-primary text-tertiary my-auto" />
            </div>
        </div>
    </a>
);