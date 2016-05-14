(function() {
	"use strict";

	angular
		.module('infosec-tutor.core')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('main', {
				abstract: true,
				templateUrl: 'app/components/core/layout.html',
				controller: 'LayoutController',
				controllerAs: 'vm'
			})
			.state('main.home', {
				url: '/home',
				templateUrl: 'app/components/core/home.html'
			})
			.state('main.review', {
				url: '/review',
				template: '<it-review review="test"></it-review>'
			})
			.state('main.about', {
				url: '/about',
				templateUrl: 'app/components/core/about.html'
			});
	}
})();