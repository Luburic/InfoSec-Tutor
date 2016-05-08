(function() {
	"use strict";

	angular
		.module('infosec-tutor.cryptography.public-key')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.cryptography.public-key.ecc', {
				url: '/ecc',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc.html',
				redirectTo: 'main.cryptography.public-key.ecc.overview'
			})
			.state('main.cryptography.public-key.ecc.overview', {
				url: '/overview',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-overview.html'
			})
			.state('main.cryptography.public-key.ecc.elliptic-curves', {
				url: '/elliptic-curves',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-elliptic-curves.html'
			})
			.state('main.cryptography.public-key.ecc.demo', {
				url: '/demo',
				templateUrl: 'app/components/cryptography/public-key/ecc/ecc-demo.html'
			});
	}
})();