(function(){
  'use strict';

   angular.module('infosec-tutor.core')
    .run(['$templateCache', function ($templateCache) {
        $templateCache.put('partials/menu-toggle.tmpl.html',
          '<md-button class="md-button-toggle" ng-class="{\'toggled\' : isOpen()}"\n' +
          '  ng-click="toggle()"\n' +
          '  aria-controls="docs-menu-{{section.name}}"\n' +
          '  layout="row"\n' +
          '  aria-expanded="{{isOpen()}}">\n' +
          '  {{section.name}}\n' +
          '  <md-icon md-font-set="fa fa-chevron-down" class="md-toggle-icon" ng-class="{\'toggled\' : isOpen()}"></md-icon>' +
          '</md-button>\n' +
          '<ul ng-show="isOpen()" id="docs-menu-{{section.name}}" class="menu-toggle-list">\n' +
          '  <li ng-repeat="page in section.pages">\n' +
          '    <nl-menu-link section="page" ng-if="page.type === \'link\'"></nl-menu-link>' +
          '    <nl-menu-toggle section="page" ng-if="page.type === \'toggle\'"></nl-menu-toggle>\n' +
          '  </li>\n' +
          '</ul>\n' +
          '');
      }])
   .directive('nlMenuToggle', ['$timeout', function ($timeout ) {
        return {
          scope: {
            section: '='
          },
          templateUrl: 'partials/menu-toggle.tmpl.html',
          link: function (scope, element) {
            var open = false;
            scope.isOpen = function () {
              return open;
            };
            scope.toggle = function () {
              open = !open;
            };
          }
        };
      }])

})();