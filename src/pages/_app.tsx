import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "styles/styles.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class" enableColorScheme={true} defaultTheme="dark">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
