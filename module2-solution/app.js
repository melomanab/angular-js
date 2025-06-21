(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    // Initialize data on service
    toBuy.initializeItemsToBuy =  function(){
            ShoppingListCheckOffService.addItemToBuy('yaourt', '3');
            ShoppingListCheckOffService.addItemToBuy('creme', '1');
     }

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
}

// ShoppingListCheckOffService
function ShoppingListCheckOffService(){
    var service = this;

    // List of items to buy
    var itemsToBuy = [];

    // Initialize
    service.addItemToBuy = function(itemName, itemQuantity){
        var item = {
            name : itemName,
            quantity: itemQuantity
        };
        itemsToBuy.push(item);
    }

    service.getItemsToBuy = function(){
        return itemsToBuy;
    }
}

})();