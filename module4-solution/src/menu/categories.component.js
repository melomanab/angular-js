(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menu/templates/main-categories.template.html',
            bindings:{
                items: '<'
            }
        });
})();