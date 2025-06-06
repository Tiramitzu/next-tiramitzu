import React, { HTMLAttributes } from "react";

import Head from "components/layout/Head";

type PageProps = HTMLAttributes<HTMLDivElement> & { mainClassName?: string };

const Page = (props: PageProps) => (
	<>
		<Head />
		<main className={"flex-grow flex items-center justify-center"}>
			<div className={"w-auto items-center justify-center " + props.className}>{props.children}</div>
		</main>
	</>
);

export default Page;
