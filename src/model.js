"use strict";

var fs = require('fs');
var crypto = require('crypto');

var hasher = crypto.createHash('sha1');

module.exports = {
    loadQuestions: loadQuestions,
    saveAnswer: saveAnswer
};

function loadQuestions(fileName, callback) {
    fs.readFile(__dirname + '/db/' + fileName + '.json', function(err, data) {
        if(err) {
            if(err.code === "ENOENT") {
                console.log("File '"+fileName+".json' not found in folder 'db', returning an empty array.");
                callback([]);
                return;
            } else {
                throw err;
            }
        }
        callback(JSON.parse(data.toString()));
    });
}

function saveAnswer(answers, field, callback) {
    var fileName = hasher.update(answers.student + field).digest('hex');
    fs.writeFile(__dirname + '/answers/' + fileName + '.json', JSON.stringify(answers), function(err) {
        if(err) {
            throw err;
        }
        callback();
    });
}