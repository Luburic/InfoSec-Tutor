(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.symmetric-key.des')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography/symmetric-key/des', '/cryptography/symmetric-key/des/overview');

		$stateProvider
			.state('main.cryptography.symmetric-key.des', {
				url: '/des',
				abstract: true,
				views: {
					"tabs@main": {
						templateUrl: "app/components/cryptography/symmetric-key/des/des-tabs.html"
					},
					"": {
						template: "<ui-view></ui-view>"
					}
				}
			})
			.state('main.cryptography.symmetric-key.des.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/symmetric-key/des/des-overview.html'
			})
			.state('main.cryptography.symmetric-key.des.algorithm', {
				url: '/algorithm',
				templateUrl: 'app/components/cryptography/symmetric-key/des/des-algorithm.html'
			})
			.state('main.cryptography.symmetric-key.des.demo', {
				url: '/demo',
				templateUrl: 'app/components/cryptography/symmetric-key/des/des-demo.html',
				controller: 'DESDemoController',
				controllerAs: 'vm'
			})
			.state('main.cryptography.symmetric-key.des.next', {
				url: '/next',
				templateUrl: 'app/components/cryptography/symmetric-key/des/des-next.html'
			});
	}
})();