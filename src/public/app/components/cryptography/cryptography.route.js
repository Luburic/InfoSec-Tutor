(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography', '/cryptography/overview');

		$stateProvider
			.state('main.cryptography', {
				abstract: true,
				url: '/cryptography',
				template: '<ui-view></ui-view>'
			})
			.state('main.cryptography.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/cryptography.html'
			});
	}
})();