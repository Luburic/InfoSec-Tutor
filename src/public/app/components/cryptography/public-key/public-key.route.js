(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.public-key')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.cryptography.public-key', {
				abstract: true,
				url: '/public-key',
				template: '<ui-view></ui-view>'
			})
			.state('main.cryptography.public-key.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/public-key/public-key.html'
			})
			.state('main.cryptography.public-key.rsa', {
				url: '/rsa',
				templateUrl: 'app/components/cryptography/public-key/public-key-rsa.html'
			})
			.state('main.cryptography.public-key.ecc', {
				url: '/ecc',
				templateUrl: 'app/components/cryptography/public-key/public-key-ecc.html'
			});
	}
})();