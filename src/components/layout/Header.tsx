import { faFolder, faHome, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";

export const routes = [
	{ href: "/", label: "Home", icon: faHome },
	{ href: "/#projects", label: "Projects", icon: faFolder },
	{ href: "/#profile", label: "Profile", icon: faUser }
];

function Header() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const [_mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	const router = useRouter();

	useEffect(() => setMounted(true), []);

	return (
		<header className="absolute top-0 z-50 w-full shadow-md bg-secondary dark:bg-tertiary">
			<nav className="py-2.5 px-2 rounded sm:px-4 border-quaternary dark:border-secondary">
				<div className="flex flex-wrap justify-between items-center mx-auto w-full">
					<Link href="/" className="flex space-x-4" passHref>
						<span className="self-center text-base font-semibold whitespace-nowrap lg:text-lg text-tertiary dark:text-primary">
							Tiramitzu
						</span>
					</Link>
					<div className="flex flex-row -mr-2 md:hidden md:order-2">
						<button
							className="inline-flex justify-center items-center p-2 rounded-md hover:text-gray-300 focus:outline-none text-tertiary dark:text-primary dark:hover:text-secondary"
							type="button"
							onClick={() => setIsCollapsed(!isCollapsed)}>
							<svg
								width="20"
								height="20"
								fill="currentColor"
								className="w-8 h-8"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
							</svg>
						</button>
						<div className="flex flex-col mt-2 w-10 h-10 md:flex-row md:mt-0 md:space-x-2 md:text-sm md:font-medium">
							<button
								onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
								className="text-tertiary dark:text-primary">
								<FontAwesomeIcon icon={resolvedTheme === "dark" ? faSun : faMoon} size="2x" />
							</button>
						</div>
					</div>
					<div className="flex flex-col mt-2 md:flex-row md:mt-0 md:space-x-2 md:text-sm md:font-medium mobile:hidden">
						<button
							onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
							className="text-tertiary dark:text-primary">
							<FontAwesomeIcon icon={resolvedTheme === "dark" ? faSun : faMoon} size="2x" />
						</button>
					</div>
					<div
						className={`justify-between items-center w-full md:flex md:w-auto md:order-1 overflow-hidden md:overflow-visible ${
							isCollapsed ? "h-0" : "h-26"
						}`}
						id="list-mobile">
						<ul className="flex flex-col mt-2 md:flex-row md:mt-0 md:space-x-2 md:text-sm md:font-medium">
							{routes.map(route => (
								<li key={route.label}>
									<Link
										href={route.href}
										className={`block py-2 pr-4 pl-3 font-semibold hover:opacity-75 text-tertiary ${
											router.pathname === route.href ? "text-violet-500 font-bold" : " dark:text-primary"
										}`}>
										{route.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
