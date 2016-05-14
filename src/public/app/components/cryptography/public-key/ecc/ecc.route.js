(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.public-key.ecc')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography/public-key/ecc', '/cryptography/public-key/ecc/overview');

		$stateProvider
			.state('main.cryptography.public-key.ecc', {
				url: '/ecc',
				abstract: true,
				views: {
					"tabs@main": {
						templateUrl: "app/components/cryptography/public-key/ecc/ecc-tabs.html"
					},
					"": {
						template: "<ui-view></ui-view>"
					}
				}
			})
			.state('main.cryptography.public-key.ecc.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-overview.html'
			})
			.state('main.cryptography.public-key.ecc.algorithm', {
				url: '/algorithm',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-algorithm.html'
			})
			.state('main.cryptography.public-key.ecc.elliptic-curves', {
				url: '/elliptic-curves',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-elliptic-curves.html'
			})
			.state('main.cryptography.public-key.ecc.demo', {
				url: '/demo',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-demo.html'
			})
			.state('main.cryptography.public-key.ecc.review', {
				url: '/review',
				template: '<it-review review="ecc"></it-review>'
			})
			.state('main.cryptography.public-key.ecc.next', {
				url: '/next',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-next.html'
			});
	}
})();