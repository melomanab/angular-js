<!-- Items Controller -->
(function(){
    'use strict';

    angular.module('MenuApp')
        .controller('MenuItemsController', MenuItemsController);

    // The controller can expose the retrieved items object
    // such that it can be simply passed into the categories component.
    MenuItemsController.$inject = ['items'];
    function MenuItemsController(items){
        var itemsCtrl = this;
        itemsCtrl.items = items;
    }


})();