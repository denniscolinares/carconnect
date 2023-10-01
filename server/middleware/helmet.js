"use strict";

const helmet = require('helmet');

module.exports = helmet({
	referrerPolicy: {
		policy: ["no-referrer", "strict-origin-when-cross-origin"],
	},
	contentSecurityPolicy: {
		useDefaults: false,
		directives: {
			defaultSrc:
			helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
			frameAncestors: [
				"'self'",
				"https://localhost:4000",
				"https://*.facebook.com",
				"https://*.gather.town",
				"https://*.vimeo.com",
			],
			blockAllMixedContent: [],
			scriptSrc: [
				"'self'",
				"'report-sample'",
				"'unsafe-inline'",
				"'unsafe-eval'",
				"https://localhost:4000",
				"https://*.doubleclick.net",
				"https://*.google.com",
				"https://*.googleadservices.com",
				"https://*.googlesyndication.com",
				"https://*.googletagservices.com",
				"https://*.moatads.com",
				"https://api-public.addthis.com",
				"https://connect.facebook.net",
				"https://cdn.jsdelivr.net",
				"https://content.linkedin.com",
				"https://d1f8f9xcsvx3ha.cloudfront.net",
				"https://extend.vimeocdn.com",
				"https://forms.hsforms.com",
				"https://googleads.g.doubleclick.net",
				"https://graph.facebook.com",
				"https://google-analytics.com",
				"https://googletagmanager.com",
				"https://js.facebook.com",
				"https://js.hs-analytics.net",
				"https://js.hs-banner.com",
				"https://js-na1.hs-scripts.com",
				"https://js.hs-scripts.com",
				"https://js.hsadspixel.net",
				"https://js.hscollectedforms.net",
				"https://js.hscta.net",
				"https://js.hsforms.net",
				"https://js.hsleadflows.net",
				"https://js.hubspotfeedback.com",
				"https://js.usemessages.com",
				"https://m.addthis.com",
				"https://m.youtube.com",
				"https://platform.linkedin.com",
				"https://recaptcha.net",
				"https://s7.addthis.com",
				"https://player.vimeo.com",
				"https://script.crazyegg.com",
				"https://ssl.google-analytics.com",
				"https://snap.licdn.com",
				"https://static-exp1.licdn.com",
				"https://tagmanager.google.com",
				"https://v1.addthisedge.com",
				"https://www.google-analytics.com",
				"https://www.googleadservices.com",
				"https://www.googletagmanager.com",
				"https://www.gstatic.com",
				"https://www.youtube.com",
				"https://www.vimeo.com",
			],
			styleSrc: [
				"'self'",
				"'report-sample'",
				"'unsafe-inline'",
			],
			objectSrc: [
				"*.googlesyndication.com",
			],
			childSrc: [
				"'self'",
				"blob:",
				"*.googlesyndication.com",
				"*.google.com",
				"*.facebook.com",
				"*.doubleclick.net",
				"*.vimeo.com",
				"app.hubspot.com",
				"connect.facebook.net",
				"forms.hsforms.com",
				"js.hsadspixel.net",
				"js.hscollectedforms.net",
				"js.usemessages.com",
				"recaptcha.net",
				"s7.addthis.com",
				"www.googletagmanager.com",
				"www.youtube.com",
				"www.vimeo.com",
			],
			baseUri: ["'self'", "*.moatads.com"],
			formAction: [
				"'self'",
				"*.google.com",
				"*.facebook.com",
				"connect.facebook.net",
				"forms.hsforms.com",
				"forms.hubspot.com",
				"webto.salesforce.com",
			],
			workerSrc: [
				"'self'",
				"blob:",
				"www.google.com",
			],
			upgradeInsecureRequests: [],
			reportUri: [],
		},
		reportOnly: false,
	},
	strictTransportSecurity: {
		maxAge: 2592000,
		includeSubDomains: true,
		preload: true,
	},
	xDnsPrefetchControl: {
		allow: true,
	},
	xXssProtection: true,
});
