import Image from "next/image";
import Page from "components/layout/Page";
import { Suspense } from "react";
import Loading from "components/loading";

const MainPage = () => (
	<Page className="flex flex-col h-[40rem]">
		<div className="px-4 mt-10 text-center sm:px-6 lg:py-16 lg:px-8">
			<h2 className="text-2xl font-extrabold sm:text-3xl text-tertiary dark:text-primary">
				<Suspense fallback={<Loading />}>
					<Image
						src="/static/favicon.ico"
						alt="Tiramitzu"
						width="182"
						height="182"
						placeholder="blur"
						blurDataURL="LURysgof?bayt7ayofj[~qWBD%of"
						className="inline rounded-lg shadow-2xl animate-fade-in-down-2"
					/>
				</Suspense>
				<span className="block mt-2 duration-500 animate-fade-in-down-1">Tiramitzu</span>
			</h2>
			<p className="mx-auto max-w-md text-xl duration-500 text-quaternary animate-fade-in-down-1 dark:text-secondary">
				I am a software engineer based in Bogor, Indonesia.
			</p>
		</div>
	</Page>
);

export default MainPage;
