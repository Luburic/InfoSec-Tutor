(function() {
	angular
		.module('infosec-tutor.core')
		.config(config)
		.run(run);

	config.$inject = ['$mdThemingProvider'];
	function config($mdThemingProvider) {
		var customPrimary = {
	        '50': '#add987',
	        '100': '#a0d374',
	        '200': '#93cd61',
	        '300': '#85c74d',
	        '400': '#78be3c',
	        '500': '6CAB36',
	        '600': '#609830',
	        '700': '#54842a',
	        '800': '#477124',
	        '900': '#3b5d1e',
	        'A100': '#badf9b',
	        'A200': '#c8e5ae',
	        'A400': '#d5ecc1',
	        'A700': '#2f4a17'
	    };
	    $mdThemingProvider.definePalette('customPrimary', customPrimary);
	    $mdThemingProvider.theme('default').primaryPalette('customPrimary')
	}

	run.$inject = ['$rootScope', '$window'];
	function run($rootScope, $window) {
		$rootScope.$on('$stateChangeError', errorFunction);

		function errorFunction(event, toState, toParams, fromState, fromParams) {
			var error = "An error has occured!\nInvalid path.";
			console.log(error);
		}
	}
})();