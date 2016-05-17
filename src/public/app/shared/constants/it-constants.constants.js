(function() {
	"use strict";
	
	var itConstants = {
		hostAddress: "localhost",
		hostPort: "3000",
		api: "http://localhost:3000/api/"
	};

	angular
		.module('infosec-tutor.it-constants')
		.constant('itConstants', itConstants);
})();