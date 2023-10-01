'use strict';

const _ = require('lodash');

module.exports = function(data) {
	const res = this,
			defaultObj = {
				req : {},
				res : {},
				pagePath : '/',
				queryParams : {},
			},
			resObj = _.assign(defaultObj, data);
	
	const app = resObj.req.app.locals.next;
	
	return app.render(resObj.req, resObj.res, resObj.pagePath, resObj.queryParams);
};
