import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-primary dark:bg-quaternary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;