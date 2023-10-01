"use strict";

require("module-alias/register");

if (!process.env.PLATFORM_ENVIRONMENT_TYPE) {
	require("dotenv").config();
}

const express = require('express');
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require('path');
const moment = require('moment');
const pkg = require('./package');
const _ = require("lodash");

const SERVER_PORT = parseInt(process.env.PORT, 10) || 4000;
const COOKIE_KEY = "27035ef42a8a030bc084f88a044cdbb91763da84984031f83b1d7a22a22f36c70a7345e6f7cfdc5f54c2088fb9c5d7cddf87ea72b50cec470ac803bfe9d0b8a7";

const system = require("@/server/bin/system");
const cors = require("@/server/middleware/cors");
const helmet = require('@/server/middleware/helmet');

app.prepare()
		.then(() => {
			const server = express();
			
			/*
			* Make the Next Object available to all routes
			**/
			server.locals.next = app;
			
			/*
			* Initialize ExpressJS APP
			* */
			server.set('env', process.env.NODE_ENV || 'production');
			server.set('etag', 'strong');
			server.set('query parser', 'extended');
			server.enable('strict routing');
			server.disable('x-powered-by');
			server.use(compression());
			
			/*
			* Load Custom ExpressJS Responses automatically
			* */
			system.loadCustomResponse(server);
			
			/*
			* Initialize Middleware Dependencies
			* */
			server.set('trust proxy', true);
			server.use(helmet);
			server.use(cors);
			
			/*
			* Body Parser and Cookie parser
			* */
			server.use(express.raw({
				inflate: true,
				limit: "100kb",
				type: "application/octet-stream"
			}));
			
			server.use(express.text({
				defaultCharset: "utf-8",
				inflate: true,
				limit: "100kb",
				type: "text/plain"
			}));
			
			server.use(express.json());
			
			server.use(express.urlencoded({
				extended : true,
				inflate : true,
				limt : "100kb",
				parameterLimit : 1000,
				type : "application/x-www-form-urlencoded"
			}));
			
			/*
			* Load Routes automatically
			* */
			server.use(system.loadHttpRoutes(express));
			
			server.get('*', (req, res) => {
				return handle(req, res);
			});
			
			server.listen(SERVER_PORT, (err) => {
				if (err) throw err;
				console.log(`> Ready on http://localhost:${SERVER_PORT}`);
			});
		})
		.catch((ex) => {
			console.error(ex.stack);
			process.exit(1);
		});
