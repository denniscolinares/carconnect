"use strict";

import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document';
import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();
const {API_BASE_URL} = publicRuntimeConfig;

const Documents = (props) => {
	
	return (
			<Html>
				<Head>
					<meta charSet="utf-8"/>
					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:site" content="@Audinate"/>
					<meta name="twitter:creator" content="@Audinate"/>
					<link rel="dns-prefetch" href="https://dante.io.sfo3.digitaloceanspaces.com/"/>
					<link rel="dns-prefetch" href={API_BASE_URL}/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
	);
};

Documents.getInitialProps = async (ctx) => {
	const initialProps = await Document.getInitialProps(ctx);
	
	return {
		...initialProps,
	};
};

export default Documents;
