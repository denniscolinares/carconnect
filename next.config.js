"use strict";

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
  reactStrictMode: true,
	transpilePackages: ['antd'],
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	serverRuntimeConfig: {
		CMS_API_BASE_URL: process.env.CMS_API_BASE_URL,
		API_BASE_URL: process.env.API_BASE_URL,
		NODE_BASE_URL: process.env.NODE_BASE_URL,
		CF_API_BASE_URL: process.env.CF_API_BASE_URL,
		WP_API_JWT: process.env.WP_API_JWT,
	},
	publicRuntimeConfig: {
		CMS_API_BASE_URL: process.env.CMS_API_BASE_URL,
		API_BASE_URL: process.env.API_BASE_URL,
		NODE_BASE_URL: process.env.NODE_BASE_URL,
		CF_API_BASE_URL: process.env.CF_API_BASE_URL,
		WP_API_JWT: process.env.WP_API_JWT,
	},
};

module.exports = nextConfig;
