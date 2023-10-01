"use strict";

import React from "react";

import App from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
	
	return (
			<main>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				
				<Component {...pageProps} />
			</main>
	);
};

MyApp.getInitialProps = async (ctx) => {
	const initialProps = await App.getInitialProps(ctx);
	
	return {
		...initialProps,
	};
};

export default MyApp;
