"use strict";

GLOBAL.DEBUG = process.argv.indexOf("-d") != -1 || process.argv.indexOf("--debug") != -1;

var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    controller = require("./controller.js");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get("/api/review/:review", controller.review);
app.post("/api/review/:review", controller.reviewSubmit);

app.get("/api/demo/:algorithm", controller.demo);

app.listen(3000, function() {
    console.log("Server started");
});