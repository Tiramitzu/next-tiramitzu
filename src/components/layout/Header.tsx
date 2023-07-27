import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
	const [_mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<header className="absolute top-0 z-50 w-full shadow-md bg-primary dark:bg-tertiary">
			<nav className="py-2.5 px-2 rounded sm:px-4 border-quaternary dark:border-secondary">
				<div className="flex flex-wrap justify-start items-center mx-auto w-full">
					<Link href="/" className="flex w-1/3" passHref>
						<span className="self-center text-base font-semibold whitespace-nowrap lg:text-lg text-tertiary dark:text-primary">
							Tiramitzu
						</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
