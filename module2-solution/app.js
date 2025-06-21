(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// -- Controllers

// ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    // Populate itemsToBuy at loading
     ShoppingListCheckOffService.addItemToBuy('yaourt', '3 pots');
     ShoppingListCheckOffService.addItemToBuy('cream', '1 pot');
     ShoppingListCheckOffService.addItemToBuy('basil', '1 bouquet');
     ShoppingListCheckOffService.addItemToBuy('kombucha', '1 liter');
     ShoppingListCheckOffService.addItemToBuy('orange juice', '1 liter');

     toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
}

// AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
}

// -- Services

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