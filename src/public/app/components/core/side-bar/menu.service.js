(function(){

'use strict';

  angular.module('infosec-tutor.core')
  .factory('menu', [
      '$location',
      '$rootScope',
      function ($location) {

        var sections = [{
          name: 'Getting Started',
          state: 'main.home',
          type: 'link'
        }];

        sections.push({
          name: 'Cryptography',
          type: 'toggle',
          pages: [{
            name: 'Overview',
            type: 'link',
            state: 'main.cryptography.overview',
          }, {
            name: 'Symmetric-key cryptography',
            type: 'toggle',
            pages: [{
                name: 'Overview',
                type: 'link',
                state: 'main.cryptography.symmetric-key.overview',
              }, {
                  name: 'DES',
                  state: 'main.cryptography.symmetric-key.des.overview',
                  type: 'link',
              }, {
                  name: 'AES',
                  state: 'main.cryptography.symmetric-key.aes.overview',
                  type: 'link',
              }]
          },
          {
            name: 'Public-key cryptography',
            type: 'toggle',
            pages: [{
                name: 'Overview',
                type: 'link',
                state: 'main.cryptography.public-key.overview',
              }, {
                  name: 'RSA',
                  state: 'main.cryptography.public-key.rsa.overview',
                  type: 'link',
              }, {
                  name: 'ECC',
                  state: 'main.cryptography.public-key.ecc.overview',
                  type: 'link',
              }]
          }]
        });

        sections.push({
          name: 'About',
          type: 'link',
          state: 'main.about'
        });

        var self;

        return self = {
          sections: sections,

          selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
          }
        };
      }]);
      
})();