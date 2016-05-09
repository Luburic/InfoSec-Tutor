(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.it-math')
		.config(config);

	function config() {
		MathJax.Hub.Config({
			extensions: ["tex2jax.js"],
    		jax: ["input/TeX", "output/HTML-CSS"],
		    skipStartupTypeset: true,
		    messageStyle: "none",
		    "HTML-CSS": {
		        showMathMenu: false
		    },
		    tex2jax: {
				inlineMath: [['$','$'], ['\\(','\\)']],
				processEscapes: true
			}
		});
		MathJax.Hub.Configured();
	}
})();