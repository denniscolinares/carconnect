'use strict';

const fs = require('fs');
const appRoot = require('app-root-path');

module.exports = {
	loadCustomResponse : function(express) {
		const responseDir = appRoot + "/server/response";
		
		if (fs.existsSync(responseDir)) {
			fs.readdirSync(responseDir).filter((file) => {
				return (file.indexOf(".") !== 0) && (file.slice(-3) === ".js");
			}).forEach((file) => {
				const filename = file.split(".")[0];
				express.response[filename] = require(responseDir + "/" + filename);
			});
		}
	},
	loadHttpRoutes : function(express) {
		const router = express.Router(),
					routesDir = appRoot + "/server/routes";
		
		if (fs.existsSync(routesDir)) {
			fs.readdirSync(routesDir).filter((file) => {
				return (file.indexOf(".") !== 0) && (file.slice(-3) === ".js");
			}).forEach((file) => {
				const filename = file.split(".")[0];
				router.use(require(routesDir + "/" + filename)(express.Router()));
			});
		}
		
		return router;
	}
};
