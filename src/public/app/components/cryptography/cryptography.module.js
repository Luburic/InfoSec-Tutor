(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography', [
			'ui.router',
			'infosec-tutor.cryptography.public-key',
			'infosec-tutor.cryptography.symmetric-key'
			]);
})();