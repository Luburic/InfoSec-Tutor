(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.symmetric-key')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography/symmetric-key', '/cryptography/symmetric-key/overview');

		$stateProvider
			.state('main.cryptography.symmetric-key', {
				abstract: true,
				url:'/symmetric-key',
				template: '<ui-view></ui-view>'
			})
			.state('main.cryptography.symmetric-key.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/symmetric-key/symmetric-key.html'
			});
	}
})();
