(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.cryptography.public-key.rsa')
		.controller('RSADemoController', RSADemoController);

	RSADemoController.$inject = ['itConstants', '$http'];
	function RSADemoController(itConstants, $http) {
		var vm = this;

		vm.submitEncryption = submitEncryption;
    vm.submitSignature = submitSignature;
    vm.submitVerification = submitVerification;
    vm.consoleSignature = '';
    vm.consoleEncryption = '';
    vm.submission = {
      publicKey: '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN\nFOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76\nxFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4\ngwQco1KRMDSmXSMkDwIDAQAB\n-----END PUBLIC KEY-----',
      privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ\nWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR\naY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB\nAoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv\nxTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH\nm7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd\n8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF\nz/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5\nrN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM\nV7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe\naTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil\npsLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz\nuku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876\n-----END RSA PRIVATE KEY-----',
      plaintext: 'The quick brown fox jumps over the lazy dog',
      text: 'The quick brown fox jumps over the lazy dog',
      verified: false
    };
    vm.enableSubmission = true;

    function submitEncryption() {
      if(vm.submission.privateKey && vm.submission.publicKey) {
        if(vm.submission.plaintext) {
          vm.enableSubmission = false;
          $http.get(itConstants.api + 'demo/rsa?text=' + vm.submission.plaintext + '&mode=encryption').then(function(res) {
            vm.submission.ciphertext = res.data.text;
            vm.console += res.data.consolePrint;
            vm.submission.plaintext = '';
            vm.enableSubmission = true;
          }, function(err) {
            vm.enableSubmission = true;
          });
        } else if(vm.submission.ciphertext) {
          vm.enableSubmission = false;
          $http.get(itConstants.api + 'demo/rsa?text=' + vm.submission.ciphertext + '&mode=decryption').then(function(res) {
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

    function submitSignature() {
      if(vm.submission.text) {
        vm.enableSubmission = false;
        $http.get(itConstants.api + 'demo/rsa?text=' + vm.submission.text + '&mode=sign').then(function(res) {
          vm.submission.signature = res.data.text;
          vm.console += res.data.consolePrint;
          vm.enableSubmission = true;
        }, function(err) {
          vm.enableSubmission = true;
        });
      }
    }

    function submitVerification() {
      if(vm.submission.signature) {
        vm.enableSubmission = false;
        $http.get(itConstants.api + 'demo/rsa?text=' + vm.submission.text + '&mode=verify&sign=' + vm.submission.signature).then(function(res) {
          vm.console += res.data.consolePrint;
          vm.submission.verified = res.data.text;
          vm.enableSubmission = true;
        }, function(err) {
          vm.enableSubmission = true;
        });
      }
    }
  }
})();