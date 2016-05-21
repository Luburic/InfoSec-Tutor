"use strict";

var model = require("./model.js");

module.exports = {
	quiz: quiz,
	quizSubmit: quizSubmit,

	demo: demo
};

function quiz(req, res) {
	model.loadQuestions(req.params.quiz, function(questions) {
		var status = 200;
		if(questions.length === 0) {
			status = 404;
		}
		res.status(status).json(questions);
        return;
	});
}

function quizSubmit(req, res) {
	model.saveAnswer(req.body, req.params.quiz, function() {
		res.status(200).json({});
	});
}

function demo(req, res) {
	var algorithm = require('./crypto/' + req.params.algorithm + '.js');
	var response = algorithm.response(req.query.text, req.query.key, req.query.mode, req.query.sign);
	res.status(200).json(response);
}
