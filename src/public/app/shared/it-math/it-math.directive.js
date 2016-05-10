(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.it-math')
		.directive('itMath', itMath);

		function itMath() {
			return {
				restrict: 'E',
				link: function(scope, element, attrs) {
					katex.render(element[0].firstChild.data, element[0]);
				}
			};
		}
})();