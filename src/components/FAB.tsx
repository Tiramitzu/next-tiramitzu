import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { routes } from "components/layout/Header";

const FAB = () => (
	<div className="flex fixed right-0 top-1/2 z-50 flex-col gap-2 transform -translate-x-1/2 -translate-y-1/2">
		{routes.map(({ href, label, icon }) => (
			<Link
				key={label}
				href={href}
				className="py-2 px-4 font-bold rounded-full shadow-lg bg-primary text-tertiary dark:bg-tertiary dark:text-secondary dark:hover:bg-quaternary hover:bg-secondary"
				passHref>
				<FontAwesomeIcon icon={icon} size="xs" />
			</Link>
		))}
	</div>
);

export default FAB;
