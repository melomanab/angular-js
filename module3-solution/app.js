(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


// Directive function
function FoundItemsDirective() {
    var ddo= {
        templateUrl: 'foundItems.html',
        scope:{
            items: '<',
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
    };

    return ddo;
}

// Directive controller
function FoundItemsDirectiveController() {
    // TODO implement
    var list = this;
}


// Service relying on http ajax client
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
        return $http(
            {
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            }
        ).then(function(response) {

            // Create an array of menu items (not exposed)
            var foundItems = [];

            if (!searchTerm) {
                return foundItems;
            }

            // Process response and keep only item that match
            var menuData = response.data;

            for (var category in menuData) {
                if(menuData.hasOwnProperty(category)) {
                    var menuItems = menuData[category].menu_items;

                    for (var i= 0; i < menuItems.length; i++) {
                        var item = menuItems[i];

                        // Check if the search term is in the description of the item
                        if(item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            foundItems.push(item);
                        }
                    }
                }
            }
            return foundItems;
        }); // End of promise
    }; // End of function definition
}


NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

    var narrow = this;

    narrow.searchTerm = '';
    narrow.found = [];
    narrow.message='';

    narrow.narrowItDown = function(searchTerm){

        if(narrow.searchTerm === ''){
            console.log("Seach term empty");
            narrow.message= "Nothing found. Please type a search term and try again.";
            return;
        }

        console.log("Calling the http service");
        var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

        // Set the items once the menu items are load
        promise.then(function(foundItems) {
            console.log("Menu items retrieved");
            // Reset the error message
            narrow.message='';
            // Update the list of menu items within the controller
            narrow.found = foundItems;

            if(foundItems.length === 0){
                console.log("No matched menu items found.");
                narrow.message="Nothing found using '" + narrow.searchTerm + "'. Please try again." ;
            }

        }).catch(function(error) {
            console.log("Error fetching menu items: ", error);
            narrow.message = "Error fetching menu items. Please try again";
        });
    };


}


})();