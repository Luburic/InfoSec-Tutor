"use strict";

var model = require("./model.js");

module.exports = {
	review: review,
	reviewSubmit: reviewSubmit
};

function review(req, res) {
	model.loadQuestions(req.params.review, function(questions) {
		var status = 200;
		if(questions.length === 0) {
			status = 404;
		}
		res.status(status).json(questions);
        return;
	});
}

function reviewSubmit(req, res) {
	model.saveAnswer(req.body, req.params.review, function() {
		res.status(200).json({});
	});
}