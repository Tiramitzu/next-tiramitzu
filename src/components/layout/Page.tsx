import React, { PropsWithChildren, HTMLAttributes } from "react";
import Head, { HeadProps } from "./Head";
import Header from "./Header";
import Footer from "./Footer";

type PageProps = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & { mainClassName?: string };

const Page = (props: PageProps) => (
  <>
    <Head {...props} />
    <Header />
    <main
      className={"flex-grow flex " + props.mainClassName}
    >
      <div className={"container h-full w-auto " + props.className}>
        {props.children}
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
