"use strict";

var fs = require('fs');

module.exports = {
    loadQuestions: loadQuestions
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
