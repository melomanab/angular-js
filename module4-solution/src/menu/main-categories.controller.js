(function(){
    'use strict';

    angular.module('MenuApp')
        .controller('MainCategoriesController', MainCategoriesController);

    // The controller can expose the retrieved categories object
    // such that it can be simply passed into the categories component.
    MainCategoriesController.$inject = ['items'];
    function MainCategoriesController(items){
        var categoriesList = this;
        categoriesList.items = items;
    }

})();