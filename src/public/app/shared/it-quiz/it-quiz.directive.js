(function() {
	"use strict";

	angular
		.module('infosec-tutor.it-quiz')
		.directive('itQuiz', itQuiz);

		itQuiz.$inject = ['itConstants', '$http', '$mdDialog', '$state'];
		function itQuiz(itConstants, $http, $mdDialog, $state) {
			return {
				restrict: 'E',
				templateUrl: 'app/shared/it-quiz/it-quiz.html',
				link: function(scope, element, attrs) {
					$http.get("http://" + itConstants.hostAddress + ":" + itConstants.hostPort + "/api/quiz/" + attrs.quiz).then(function(response) {
						scope.quiz = response.data;
						scope.answer = {};
						scope.submit = function() {
							$http.post(itConstants.api + "quiz/" + attrs.quiz, scope.answer).then(function() {
								$state.go('main.overview');
								$mdDialog.show(
							      	$mdDialog.alert()
								        .clickOutsideToClose(true)
								        .title('You have successfully finished the quiz.')
								        .ariaLabel('Successfully Completed Quiz')
								        .ok('See ya!')
							    );
							});
						}
					});
				},
			};
		}
})();
