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

     // Expose toBuy.items list
     toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

     // Buy item
     toBuy.bought = function(itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex);
     }

     toBuy.isEmpty = function(){
         if (toBuy.items.length === 0){
             return true;
          }
          return false;
     }

} // end ToBuyController


// AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;

    // Expose alreadyBought.items list
    alreadyBought.items = ShoppingListCheckOffService.getItemsBought();

    // is the list of bought items sempty?
     alreadyBought.isEmpty = function(){
         if (alreadyBought.items.length === 0){
             return true;
          }
          return false;
     }

}

// -- Services

// ShoppingListCheckOffService
function ShoppingListCheckOffService(){
    var service = this;

    // List of items to buy
    var itemsToBuy = [];

    // List of the already bought items
    var itemsBought = [];

    // Add a new item to the itemsToBuy list
    service.addItemToBuy = function(itemName, itemQuantity){
        var item = {
            name : itemName,
            quantity: itemQuantity
        };
        itemsToBuy.push(item);
    }

    service.removeItemToBuy = function(itemIndex){
        itemsToBuy.splice(itemIndex, 1);
    }

    service.getItemsToBuy = function(){
        return itemsToBuy;
    }

    // Manage bought items
    service.getItemsBought = function(){
        return itemsBought;
    }

    // Add a new item to the itemsBought list
    service.addItemToBought = function(itemName, itemQuantity){
        var item = {
            name : itemName,
            quantity: itemQuantity
        };
        itemsBought.push(item);
    }

    // Buy an item
    service.buyItem = function(itemIdx){
        // add it to the list of bought items
        this.addItemToBought(itemsToBuy[itemIdx].name, itemsToBuy[itemIdx].quantity);
        // remove it from the list of to buy items
        this.removeItemToBuy(itemIdx);
    }

}

})();