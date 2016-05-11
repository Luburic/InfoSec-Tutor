(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.public-key')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('/cryptography/public-key', '/cryptography/public-key/overview');

		$stateProvider
			.state('main.cryptography.public-key', {
				abstract: true,
				url: '/public-key',
				template: '<ui-view></ui-view>'
			})
			.state('main.cryptography.public-key.overview', {
 				url: '/overview',
 				templateUrl: 'app/components/cryptography/public-key/public-key.html'
 			});
	}
})();
