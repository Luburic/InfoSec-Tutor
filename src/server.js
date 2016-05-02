"use strict";

var express = require("express"),
	app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log("Server started");
});