import { faFolder, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Link from "next/link";

const routes = [
	{ href: "/", label: "Profile", icon: faUser },
	{ href: "/#projects", label: "Projects", icon: faFolder },
];

const FAB = () => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<div className="flex fixed right-0 top-1/2 z-50 flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2">
			{routes.map(({ href, label, icon }) => (
				<Link
					key={label}
					href={href}
					className="p-2 w-10 h-10 font-bold rounded-full shadow-xl bg-primary text-tertiary dark:bg-tertiary dark:text-secondary dark:hover:bg-quaternary hover:bg-secondary"
					passHref>
					<FontAwesomeIcon icon={icon} size="xs" />
				</Link>
			))}
			<button
				onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
				className="p-2 w-10 h-10 font-bold rounded-full shadow-xl bg-primary text-tertiary dark:bg-tertiary dark:text-secondary dark:hover:bg-quaternary hover:bg-secondary">
				<FontAwesomeIcon icon={resolvedTheme === "dark" ? faMoon : faSun} size="1x" />
			</button>
		</div>
	);
};

export default FAB;
