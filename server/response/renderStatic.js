'use strict';

const _ = require('lodash');
const path = require("path");

module.exports = function(data) {
	const res = this,
			defaultObj = {
				req : {},
				res : {},
				filePath : "",
			},
			resObj = _.assign(defaultObj, data);
	
	const app = resObj.req.app.locals.next;
	
	resObj.filePath = path.resolve("public/" + resObj.filePath);
	
	return app.serveStatic(resObj.req, resObj.res, resObj.filePath);
};
