import Page from "components/layout/Page";
import Image from "next/image";

const Index = () => (
  <Page className="flex flex-col items-center justify-center mt-16 mb- sm:pt-24 lg:pb-4 sm:my-auto">
    <div className="text-center w-full mx-auto py-12 px-4 my-20 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
        <Image src="/static/favicon.ico" alt="Tiramitzu" width="126" height="126" className="rounded-lg shadow-2xl animate-fade-in-down-1" />
        <span className="mt-2 block animate-fade-in-down-1">Tiramitzu</span>
      </h2>
      <p className="text-xl mt-2 max-w-md mx-auto text-neutral-300 animate-fade-in-down-1">
        I am a software engineer based in Bogor, Indonesia.
      </p>
    </div>
  </Page>
);

export default Index;
