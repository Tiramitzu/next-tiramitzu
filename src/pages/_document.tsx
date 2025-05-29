import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
	render() {
		return (
			<Html className="scroll-smooth">
				<Head />
				<body className="mt-auto transition duration-700 bg-base-100">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
