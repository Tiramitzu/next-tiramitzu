import Page from "components/layout/Page";
import Link from "next/link";

const Projects = () => {
  return (
    <Page
      title="Tiramitzu's Project"
      className="flex flex-col justify-center items-center mt-16 sm:pt-24 sm:my-auto lg:pb-4"
    >
      <div className="p-8 dark:bg-neutral-900 rounded-lg shadow">
        <div className="container flex justify-center mx-auto pt-6">
          <div>
            <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 mx-auto">
              Project List
            </h1>
          </div>
        </div>
        <div className="w-full px-10 pt-10">
          <div className="container mx-auto">
            <div
              role="list"
              aria-label="Project List "
              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              <div
                role="listitem"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 bg-neutral-800"
              >
                <div className="rounded overflow-hidden shadow-md">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="static/favicon.ico"
                        alt="Display Picture of Next Tiramitzu"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">
                      Next Tiramitzu
                    </h1>
                    <p className="text-center text-gray-300 text-base pt-3 font-normal">
                      It is this project open source / code. Next.js
                      based project that I am currently working on.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a className="mx-5">
                        <div aria-label="Github" role="img">
                          <Link href="https://github.com/Tiramitzu/next-tiramitzu">
                            <button
                              type="button"
                              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
              <div
                role="listitem"
                className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-neutral-800">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://repository-images.githubusercontent.com/236645319/8a781f4e-6955-499a-9e88-380c5adccfa5"
                        alt="Display Picture of Rawon"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">
                      Rawon
                    </h1>
                    <p className="text-center text-gray-300 text-base pt-3 font-normal">
                      Rawon is a simple and powerful Discord music bot built to
                      fulfill your production desires. Easy to use, with no
                      coding required.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a className="mx-5">
                        <div aria-label="Github" role="img">
                          <Link href="https://github.com/Rahagia/rawon">
                            <button
                              type="button"
                              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Projects;
