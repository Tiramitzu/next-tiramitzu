import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "components/layout/Header";
import Page from "components/layout/Page";
import Image from "next/image";
import Projects from "./projects";
import Profile from "./profile";
import Link from "next/link";

const Index = () => {
	return (
		<>
			<div className="flex fixed right-0 top-1/2 flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2">
				{routes.map(({ href, label, icon }) => (
					<Link
						key={label}
						href={href}
						className="py-2 px-4 font-bold bg-violet-500 rounded-full shadow-lg hover:bg-violet-600 text-tertiary dark:text-secondary"
						passHref>
						<FontAwesomeIcon icon={icon} size="xs" />
					</Link>
				))}
			</div>
			<Page className="flex flex-col justify-center items-center py-32" mainClassName=" items-center justify-center">
				<div className="z-20 py-12 px-4 my-20 mt-32 w-full text-center sm:px-6 lg:py-16 lg:px-8">
					<h2 className="text-2xl font-extrabold sm:text-3xl text-tertiary dark:text-primary">
						<Image
							src="/static/favicon.ico"
							alt="Tiramitzu"
							width="182"
							height="182"
							placeholder="blur"
							blurDataURL="LURysgof?bayt7ayofj[~qWBD%of"
							className="inline rounded-lg shadow-2xl animate-fade-in-down-2"
						/>
						<span className="block mt-2 animate-fade-in-down-1">Tiramitzu</span>
					</h2>
					<p className="mx-auto max-w-md text-xl text-quaternary animate-fade-in-down-1 dark:text-secondary">
						I am a software engineer based in Bogor, Indonesia.
					</p>
				</div>
			</Page>
			<Projects />
			<Profile />
		</>
	);
};

export default Index;
