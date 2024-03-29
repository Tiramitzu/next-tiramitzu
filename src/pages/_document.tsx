import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
	render() {
		return (
			<Html className="scroll-smooth">
				<Head />
				<body className="mt-auto transition duration-700 bg-secondary dark:bg-quaternary">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
