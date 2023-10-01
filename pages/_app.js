"use strict";

/*
* Global CSS must be the 1st one
* */
import '@/styles/globals.scss';

import React, {Fragment} from "react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ConfigProvider } from 'antd';

import App from "next/app";
import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { API_BASE_URL, CMS_API_BASE_URL } = publicRuntimeConfig;

import FooterComponent from "@/components/footer/index";
import HeaderComponent from "@/components/header";


const Layout = ({ Component, pageProps }) => {
		return (
				<Fragment>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
					</Head>
					
					<HeaderComponent />
					
					<main className={"grow"}>
						<Component {...pageProps} />
					</main>
					
					<FooterComponent />
				</Fragment>
		);
};

const MyApp = ({ Component, pageProps }) => {
	
	return (
			<Fragment>
				<ConfigProvider direction="ltr">
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
					</Head>
					
					<HeaderComponent />
					
					<main className={"grow"}>
						<Component {...pageProps} />
					</main>
					
					<FooterComponent />
				</ConfigProvider>	
			</Fragment>
	);
	
	/*return (
			<ConfigProvider direction="ltr">
				<Layout {...pageProps} Component={Component} />
			</ConfigProvider>
	);*/
};

MyApp.getInitialProps = async (ctx) => {
	const initialProps = await App.getInitialProps(ctx);
	
	return {
		...initialProps,
	};
};

export default MyApp;
