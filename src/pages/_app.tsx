import '../styles/styles.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Router from 'next/router';
import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';
import Head from 'next/head';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
