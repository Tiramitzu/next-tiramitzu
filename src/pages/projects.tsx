import Page from 'components/layout/Page';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
	return (
		<Page
			title="Tiramitzu's Project"
			className="flex flex-col justify-center items-center sm:pt-32 my-16 lg:pb-4"
		>
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
				<div className="text-center pb-12">
					<h2 className="text-base font-bold text-violet-500">
						The Project My Friends and I&apos;ve Been Working On
					</h2>
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
						Project List
					</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="w-full bg-neutral-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<Image
								height="180"
								width="180"
								className="object-center object-cover rounded-full"
								src="/static/favicon.ico"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">
								Next Tiramitzu
							</p>
							<p className="text-base text-gray-400 font-normal">
								It is this project open source / code. Next.js based project
								written in TSX that I am currently working on right now.
							</p>
							<div className="w-full flex justify-center pt-5 pb-5">
								<a className="mx-5">
									<div aria-label="Github" role="img">
										<Link href="https://github.com/Tiramitzu/next-tiramitzu" passHref>
											<button
												type="button"
												className="py-2 px-4 bg-violet-700 hover:bg-violet-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
											>
												Visit on GitHub
											</button>
										</Link>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="w-full bg-neutral-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<Image
								height="180"
								width="180"
								className="object-center object-cover rounded-full"
								src="/static/favicon.ico"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">
								Discord Channel Mirror
							</p>
							<p className="text-base text-gray-400 font-normal">
								As the name stated, it&apos;s a discord tool to mirror a discord
								channel to your desired channel. TypeScript coming soon.
							</p>
							<div className="w-full flex justify-center pt-5 pb-5">
								<a className="mx-5">
									<div aria-label="Github" role="img">
										<Link href="https://github.com/Tiramitzu/discord-chat-mirror" passHref>
											<button
												type="button"
												className="py-2 px-4 bg-violet-700 hover:bg-violet-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
											>
												Visit on GitHub
											</button>
										</Link>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="w-full bg-neutral-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
						<div className="mb-8">
							<Image
								height="180"
								width="180"
								className="object-center object-cover rounded-full"
								src="https://repository-images.githubusercontent.com/236645319/8a781f4e-6955-499a-9e88-380c5adccfa5"
								alt="photo"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl text-white font-bold mb-2">Rawon</p>
							<p className="text-base text-gray-400 font-normal">
								Rawon is a simple and powerful Discord music bot built to
								fulfill your production desires. Easy to use, with no coding
								required.
							</p>
							<div className="w-full flex justify-center pt-5 pb-5">
								<a className="mx-5">
									<div aria-label="Github" role="img">
										<Link href="https://github.com/Rahagia/rawon" passHref>
											<button
												type="button"
												className="py-2 px-4 bg-violet-700 hover:bg-violet-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
											>
												Visit on GitHub
											</button>
										</Link>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
};

export default Projects;
