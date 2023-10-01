'use strict';

/*
const sessionCheck = require('../../api/middleware/session');
*/

module.exports = (router) => {
	
	/*router.use("/", sessionCheck);*/
	
	router.post("/api/add", (req, res, next) => {
		res.status(200).json([req.body]);
	});
	
	router.delete("/api/delete/:id", (req, res, next) => {
		res.status(200).json([req.params.id]);
	});
	
	router.get("/api/reset", (req, res, next) => {
		
		const data = [
			{
				key: "1287f89df",
				fname: 'Dennis',
				lname: 'Colinares',
				mobile: '123-123-4567',
				email: 'dennis@colinares.com',
				description: 'My name is Dennis Colinares, I am 39 years old, living in Parañaque',
			},
		];
		
		res.status(200).json(data);
	});
	
	return router;
};
