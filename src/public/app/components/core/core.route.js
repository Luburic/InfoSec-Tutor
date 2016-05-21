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
			.state('main.quiz', {
				url: '/quiz',
				template: '<it-quiz quiz="test"></it-quiz>'
			})
			.state('main.about', {
				url: '/about',
				templateUrl: 'app/components/core/about.html'
			});
	}
})();
