import Page from "components/layout/Page";
import Image from "next/image";

const Index = () => (
  <Page className="flex flex-col justify-center items-center" mainClassName=" items-center justify-center">
    <div className="z-20 py-12 px-4 my-20 mt-32 w-full text-center sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-2xl font-extrabold text-tertiary sm:text-3xl">
        <Image src="/static/favicon.ico" alt="Tiramitzu" width="182" height="182"
          placeholder="blur" blurDataURL="LURysgof?bayt7ayofj[~qWBD%of"
          className="inline rounded-lg shadow-2xl animate-fade-in-down-2" />
        <span className="block mt-2 animate-fade-in-down-1">Tiramitzu</span>
      </h2>
      <p className="mx-auto max-w-md text-xl text-quaternary animate-fade-in-down-1">
        I am a software engineer based in Bogor, Indonesia. (Kind of)
      </p>
    </div>
  </Page>
);

export default Index;
