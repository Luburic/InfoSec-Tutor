(function() {
	"use strict";
	
	var itConstants = {
		hostAdress: "localhost",
		hostPort: "3000"
	};

	angular
		.module('infosec-tutor.it-constants')
		.constant('itConstants', itConstants);
})();