import { FaFolder, FaMoon, FaSun, FaUser } from "react-icons/fa6";
import { useTheme } from "next-themes";
import Link from "next/link";

const routes = [
	{ href: "/", label: "Profile", icon: <FaUser className="m-auto" size="1.5em" /> },
	{ href: "/#projects", label: "Projects", icon: <FaFolder className="m-auto" size="1.5em" /> },
];

const FAB = () => {
	const { resolvedTheme, setTheme } = useTheme();
	let icon = <FaMoon className="m-auto" size="1.5em" />;

	if (resolvedTheme === "light") icon = <FaSun className="m-auto" size="1.5em" />;

	return (
		<div className="flex fixed right-0 top-1/2 z-50 flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2">
			{routes.map(({ href, label, icon }) => (
				<Link
					key={label}
					href={href}
					className="p-2 m-auto w-10 h-10 font-bold rounded-full shadow-xl duration-500 hover:scale-110 bg-primary text-tertiary dark:bg-tertiary dark:text-secondary dark:hover:bg-quaternary hover:bg-secondary"
					passHref>
					{icon}
				</Link>
			))}
			<button
				onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
				className="p-2 w-10 h-10 font-bold rounded-full shadow-xl duration-500 hover:scale-110 bg-primary text-tertiary dark:bg-tertiary dark:text-secondary dark:hover:bg-quaternary hover:bg-secondary">
				{icon}
			</button>
		</div>
	);
};

export default FAB;
