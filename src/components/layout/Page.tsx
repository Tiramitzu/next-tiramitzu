import Head, { HeadProps } from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import React, { PropsWithChildren, HTMLAttributes } from "react";

type PageProps = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & { mainClassName?: string };

const Page = (props: PageProps) => (
  <>
    <Head {...props} />
    <Header />
    <main
      className={"flex-grow flex items-center justify-center"}
    >
      <div className={"container h-full mx-auto py-16" + props.className}>
        {props.children}
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
