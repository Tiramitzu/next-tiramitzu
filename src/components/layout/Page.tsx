import React, { HTMLAttributes } from "react";
import Head from "components/layout/Head";

type PageProps = HTMLAttributes<HTMLDivElement> & { mainClassName?: string };

const Page = (props: PageProps) => (
	<>
		<Head />
		<main className={"flex-grow flex items-center justify-center"}>
			<div className={"container w-auto h-20 lg:h-full items-center justify-center " + props.className}>{props.children}</div>
		</main>
	</>
);

export default Page;
