(function() {
	"use strict";
	
	angular
		.module('infosec-tutor.core')
		.controller('LayoutController', LayoutController);

	LayoutController.$inject = ['$mdSidenav', 'menu'];
	function LayoutController($mdSidenav, menu) {
		var vm = this;

		vm.onClickMenu = onClickMenu;

    vm.isOpen = isOpen;
    vm.toggleOpen = toggleOpen;
    vm.autoFocusContent = false;
    vm.menu = menu;

    vm.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };

    function onClickMenu() {
      $mdSidenav('left').toggle();
    };

    function isOpen(section) {
      return menu.isSectionSelected(section);
    }

    function toggleOpen(section) {
      menu.toggleSelectSection(section);
    }
	}
})();

