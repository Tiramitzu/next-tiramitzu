import { FaGithub } from "react-icons/fa6";

function Footer() {
	return (
		<footer className="flex fixed bottom-0 left-0 flex-col justify-center items-center py-3 px-12 w-screen h-auto duration-300 text-quaternary bg-primary dark:text-secondary dark:bg-tertiary">
			<hr className="my-2 w-full border border-opacity-50 border-quaternary dark:border-secondary" />
			<div className="flex flex-row justify-between w-full mobile:flex-col mobile:justify-center mobile:items-center">
				<p className="flex py-1 text-xs md:text-sm lg:text-base">
					© Copyright {new Date().getFullYear()}{" "}
					<a
						href="https://clytage.fandom.com/wiki/Tiramitzu"
						className="font-semibold duration-300 hover:scale-110 dark:hover:text-primary hover:text-tertiary"
						target="_blank"
						rel="noopener noreferrer">
						&nbsp;Tiramitzu
					</a>
					. All rights reserved.
				</p>
				<div className="flex flex-row">
					<a
						href="https://github.com/Tiramitzu"
						className="duration-300 hover:scale-110 dark:hover:text-primary hover:text-tertiary"
						target="_blank"
						rel="noopener noreferrer">
						<FaGithub size="1.5em" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
