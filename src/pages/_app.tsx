import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import "../styles/styles.scss";
import Head from "next/head";

import "tailwindcss/tailwind.css";

Router.events.on("routeChangeStart", url => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class">
				<Head>
					<link rel="stylesheet" type="text/css" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
