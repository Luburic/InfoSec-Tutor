(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.public-key.rsa')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography/public-key/rsa', '/cryptography/public-key/rsa/overview');
		
		$stateProvider
			.state('main.cryptography.public-key.rsa', {
				url: '/rsa',
				abstract: true,
				views: {
					"tabs@main": {
						templateUrl: "app/components/cryptography/public-key/rsa/rsa-tabs.html"
					},
					"": {
						template: "<ui-view></ui-view>"
					}
				}
			})
			.state('main.cryptography.public-key.rsa.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/public-key/rsa/rsa-overview.html'
			})
			.state('main.cryptography.public-key.rsa.algorithm', {
				url: '/algorithm',
				templateUrl: 'app/components/cryptography/public-key/rsa/rsa-algorithm.html'
			})
			.state('main.cryptography.public-key.rsa.rsa-math', {
				url: '/rsa-math',
				templateUrl: 'app/components/cryptography/public-key/rsa/rsa-math.html'
			})
			.state('main.cryptography.public-key.rsa.demo', {
				url: '/demo',
				templateUrl: 'app/components/cryptography/public-key/rsa/rsa-demo.html'
			})
			.state('main.cryptography.public-key.rsa.review', {
				url: '/review',
				templateUrl: 'app/components/cryptography/public-key/rsa/rsa-review.html'
			})
			.state('main.cryptography.public-key.rsa.next', {
				url: '/next',
				templateUrl: 'app/components/cryptography/public-key/rsa/rsa-next.html'
			});
	}
})();
