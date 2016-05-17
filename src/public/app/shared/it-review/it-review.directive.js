(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.it-review')
		.directive('itReview', itReview);

		itReview.$inject = ['itConstants', '$http', '$mdDialog', '$state'];
		function itReview(itConstants, $http, $mdDialog, $state) {
			return {
				restrict: 'E',
				templateUrl: 'app/shared/it-review/it-review.html',
				link: function(scope, element, attrs) {
					$http.get("http://" + itConstants.hostAddress + ":" + itConstants.hostPort + "/api/review/" + attrs.review).then(function(response) {
						scope.review = response.data;
						scope.answer = {};
						scope.submit = function() {
							$http.post(itConstants.api + "review/" + attrs.review, scope.answer).then(function() {
								$state.go('main.overview');
								$mdDialog.show(
							      	$mdDialog.alert()
								        .clickOutsideToClose(true)
								        .title('You have successfully finished the review.')
								        .ariaLabel('Successfully Completed Review')
								        .ok('See ya!')
							    );
							});
						}
					});
				},
			};
		}
})();