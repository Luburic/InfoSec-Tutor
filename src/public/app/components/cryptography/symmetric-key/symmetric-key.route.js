(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.symmetric-key')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.cryptography.symmetric-key', {
				abstract: true,
				url:'/symmetric-key',
				template: '<ui-view></ui-view>'
			})
			.state('main.cryptography.symmetric-key.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/symmetric-key/symmetric-key.html'
			})
			.state('main.cryptography.symmetric-key.des', {
				url: '/des',
				templateUrl: 'app/components/cryptography/symmetric-key/symmetric-key-des.html'
			})
			.state('main.cryptography.symmetric-key.aes', {
				url: '/aes',
				templateUrl: 'app/components/cryptography/symmetric-key/symmetric-key-aes.html'
			});
	}
})();