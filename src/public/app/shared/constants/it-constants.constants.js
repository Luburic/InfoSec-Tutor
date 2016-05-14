(function() {
	"use strict";
	
	var itConstants = {
		hostAddress: "localhost",
		hostPort: "3000"
	};

	angular
		.module('infosec-tutor.it-constants')
		.constant('itConstants', itConstants);
})();