import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
	const [_mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<nav className="py-0 w-full navbar">
			<div className="navbar-start">
				<Link href="/" className="text-xl normal-case btn btn-ghost">
					Tiramitzu
				</Link>
			</div>
			{/* <div className="navbar-end">
				<ul className="p-0 menu menu-horizontal">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
				</ul>
			</div> */}
		</nav>
	);
}

export default Header;
