(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.cryptography.symmetric-key.des')
		.controller('DESDemoController', DESDemoController);

	DESDemoController.$inject = ['itConstants', '$http'];
	function DESDemoController(itConstants, $http) {
		var vm = this;

		vm.submit = submit;
    vm.console = '';
    vm.submission = {key: '12345678', plaintext: 'The quick brown fox jumps over the lazy dog'};
    vm.enableSubmission = true;

    function submit() {
      if(vm.submission.key) {
        if(vm.submission.plaintext) {
          vm.enableSubmission = false;
          $http.get(itConstants.api + 'demo/des?text=' + vm.submission.plaintext + '&key=' + vm.submission.key + '&mode=encryption').then(function(res) {
            vm.submission.ciphertext = res.data.text;
            vm.console += res.data.consolePrint;
            vm.submission.plaintext = '';
            vm.enableSubmission = true;
          }, function(err) {
            vm.enableSubmission = true;
          });
        } else if(vm.submission.ciphertext) {
          vm.enableSubmission = false;
          $http.get(itConstants.api + 'demo/des?text=' + vm.submission.ciphertext + '&key=' + vm.submission.key + '&mode=decryption').then(function(res) {
            vm.submission.plaintext = res.data.text;
            vm.console += res.data.consolePrint;
            vm.submission.ciphertext = '';
            vm.enableSubmission = true;
          }, function(err) {
            vm.enableSubmission = true;
          });
        }
      }
    }
	}
})();