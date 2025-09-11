(function(){
    'use strict';

// Declare service
angular.module('Data')
    .service('MenuDataService', MenuDataService);

// Implement service function relying on http ajax client
MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
    var service = this;


    service.getAllCategories = function () {
        console.log("--> getAllCategories");
        return $http(
            {
                method: 'GET',
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json',
            }
        ).then(
            function(response) {
                // Returns a promise
                return response;
            }
        );
    } // end of getAllCategories

    service.getItemsForCategory = function (categoryShortName) {
        console.log("--> getItemsForCategory(" + categoryShortName +")");
        return $http(
            {
                method: 'GET',
                url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'),
            }
        ).then(
            function(response) {
                // Returns a promise
                return response;
            }
        );
    } // end of getAllCategories

}

})();