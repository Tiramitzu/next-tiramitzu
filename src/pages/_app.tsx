import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "styles/styles.scss";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class" enableColorScheme={true} defaultTheme="light">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
