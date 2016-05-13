"use strict";

var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    controller = require("./controller.js");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get("/api/review/:review", controller.review);

app.listen(3000, function() {
    console.log("Server started");
});