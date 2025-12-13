import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";

import "tailwindcss";
import "styles/main.css";
import client from "lib/apolloClient";
import ThemeProvider from "providers/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
