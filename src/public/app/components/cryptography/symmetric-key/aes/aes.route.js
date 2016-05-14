(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.symmetric-key.aes')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography/symmetric-key/aes', '/cryptography/symmetric-key/aes/overview');

		$stateProvider
			.state('main.cryptography.symmetric-key.aes', {
				url: '/aes',
				abstract: true,
				views: {
					"tabs@main": {
						templateUrl: "app/components/cryptography/symmetric-key/aes/aes-tabs.html"
					},
					"": {
						template: "<ui-view></ui-view>"
					}
				}
			})
			.state('main.cryptography.symmetric-key.aes.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/symmetric-key/aes/aes-overview.html'
			})
			.state('main.cryptography.symmetric-key.aes.algorithm', {
				url: '/algorithm',
				templateUrl: 'app/components/cryptography/symmetric-key/aes/aes-algorithm.html'
			})
			.state('main.cryptography.symmetric-key.aes.demo', {
				url: '/demo',
				templateUrl: 'app/components/cryptography/symmetric-key/aes/aes-demo.html'
			})
			.state('main.cryptography.symmetric-key.aes.review', {
				url: '/review',
				templateUrl: 'app/components/cryptography/symmetric-key/aes/aes-review.html'
			})
			.state('main.cryptography.symmetric-key.aes.next', {
				url: '/next',
				templateUrl: 'app/components/cryptography/symmetric-key/aes/aes-next.html'
			});
	}
})();
