import React, { HTMLAttributes } from "react";
import Head from "components/layout/Head";

type PageProps = HTMLAttributes<HTMLDivElement> & { mainClassName?: string };

const Page = (props: PageProps) => (
	<>
		<Head />
		<main className={"flex-grow flex " + props.mainClassName}>
			<div className={"container h-full w-auto " + props.className}>{props.children}</div>
		</main>
	</>
);

export default Page;
