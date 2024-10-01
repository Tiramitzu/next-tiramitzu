import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";

import "styles/styles.scss";
import "tailwindcss/tailwind.css";
import client from "lib/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider attribute="class" enableColorScheme={true} defaultTheme="dark">
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
