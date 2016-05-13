(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.it-review')
		.directive('itReview', itReview);

		itReview.$inject = ['itConstants', '$http'];
		function itReview(itConstants, $http) {
			return {
				restrict: 'E',
				templateUrl: 'app/shared/review/it-review.html',
				link: function(scope, element, attrs) {
					$http.get("http://" + itConstants.hostAddress + ":" + itConstants.hostPort + "/api/review/" + attrs.review).then(function(response) {
						scope.review = response.data;
					});
				},
			};
		}
})();