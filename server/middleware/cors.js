"use strict";

module.exports = (req, res, next) => {
	const allowedOrigin = [
		"localhost:4000",
		"localhost",
	];
	
	const permissionPolicyValues = [
		"accelerometer=(self)",
		"autoplay=(self)",
		"camera=(self)",
		"cross-origin-isolated=(self)",
		"display-capture=(self)",
		"encrypted-media=(self)",
		"fullscreen=(self)",
		"geolocation=(self)",
		"gyroscope=(self)",
		"keyboard-map=(self)",
		"magnetometer=(self)",
		"microphone=(self)",
		"midi=(self)",
		"payment=(self)",
		"picture-in-picture=(self)",
		"publickey-credentials-get=(self)",
		"screen-wake-lock=(self)",
		"sync-xhr=(self)",
		"usb=(self)",
		"xr-spatial-tracking=(self)",
		"clipboard-read=(self)",
		"clipboard-write=(self)",
		"hid=(self)",
		"serial=(self)",
		"window-placement=(self)",
	];
	
	const corsheaders = {
		"Access-Control-Allow-Origin" : `*`,
		"Access-Control-Allow-Methods" : "POST, GET, OPTIONS",
		"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
		"Access-Control-Allow-Credentials" : "true",
		"Access-Control-Max-Age" : ""
	};
	
	res.set({
		"Permissions-Policy": permissionPolicyValues.join(", "),
		"Cross-Origin-Embedder-Policy": "unsafe-none",
		"Cross-Origin-Opener-Policy": "cross-origin",
		"Cross-Origin-Resource-Policy": "cross-origin",
	});
	
	if (allowedOrigin.includes(req.hostname)) {
		res.set(corsheaders);
		
		if (req.method === 'OPTIONS') {
			return res.status(200).end();
		}
	}
	
	next();
};
