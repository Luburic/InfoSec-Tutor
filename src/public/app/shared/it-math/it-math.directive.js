(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.it-math')
		.directive('itMath', itMath);

		function itMath() {
			return {
				restrict: 'E',
				link: function(scope, element, attrs) {
						MathJax.Hub.Queue(['Typeset', MathJax.Hub, element[0]]);
				}
			};
		}
})();