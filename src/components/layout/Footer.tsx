import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
	return (
		<footer className="flex flex-col fixed bottom-0 left-0 justify-center items-center px-12 py-3 w-screen h-20 md:h-16 text-quaternary bg-secondary dark:text-primary dark:bg-tertiary">
			<hr className="my-2 w-full border border-opacity-50 border-quaternary dark:border-secondary" />
			<div className="flex flex-row w-full justify-between">
				<p className="flex py-1 text-sm md:text-base">
					© Copyright {new Date().getFullYear()}{" "}
					<Link href="https://github.com/Tiramitzu" className="font-semibold hover:text-violet-500">
						&nbsp;Tiramitzu
					</Link>
					. all rights reserved.
				</p>
				<div className="flex flex-row">
					<a
						href="https://github.com/Tiramitzu"
						className="hover:text-violet-500"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
