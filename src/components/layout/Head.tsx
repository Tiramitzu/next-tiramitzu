import { useRouter } from "next/router";
import NextHead from "next/head";

const rootURL = "https://tira.my.id";
const defaultDescription = "This is Tiramitzu's personal website created using NextJS TypeScript.";
const defaultOGImage = rootURL + "/static/favicon.ico";
const defaultTitle = "Tiramitzu's Personal Website";
const defaultColor = "#FF2A80";

export interface HeadProps {
	title?: string;
	description?: string;
	url?: string;
	ogImage?: string;
	color?: string;
}

export default function Head(props: HeadProps) {
	const { route } = useRouter();
	const defaultOGURL = rootURL + route;

	return (
		<NextHead>
			<meta charSet="UTF-8" />
			<title>{props.title || defaultTitle}</title>
			<meta name="theme-color" content={props.color || defaultColor} />
			<meta name="description" content={props.description || defaultDescription} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/static/favicon.ico" />
			<meta property="og:url" content={props.url || defaultOGURL} />
			<meta property="og:title" content={props.title || defaultTitle} />
			<meta property="og:description" content={props.description || defaultDescription} />
			<meta name="twitter:site" content={props.url || defaultOGURL} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
			<meta property="og:image" content={props.ogImage || defaultOGImage} />
		</NextHead>
	);
}
