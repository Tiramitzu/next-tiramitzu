import React, { PropsWithChildren, HTMLAttributes } from "react";
import Head, { HeadProps } from "components/layout/Head";

type PageProps = PropsWithChildren<HeadProps> & HTMLAttributes<HTMLDivElement> & { mainClassName?: string };

const Page = (props: PageProps) => (
	<>
		<Head {...props} />
		<main className={"flex-grow flex " + props.mainClassName}>
			<div className={"container h-full w-auto " + props.className}>{props.children}</div>
		</main>
	</>
);

export default Page;
