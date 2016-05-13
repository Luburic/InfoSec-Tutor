"use strict";

var model = require("./model.js");

module.exports = {
	review: review
};

function review(req, res) {
	model.loadQuestions(req.params.review, function(questions) {
		var status = 200;
		if(questions.length === 0) {
			status = 404;
		}
		res.status(status).json(elem);
        return;
	});
}