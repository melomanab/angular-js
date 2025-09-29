(function(){
    'use strict';

// Declare service
angular.module('Data')
    .service('MenuDataService', MenuDataService);

// Implement service function relying on http ajax client
MenuDataService.$inject = ['$q','$http'];
function MenuDataService($q, $http) {
    var service = this;


    service.getAllCategories = function () {
        console.log("--> getAllCategories");

        var deferred = $q.defer();

        $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
            .then(function (response) {
                setTimeout(function () {
                    deferred.resolve(response.data);
                }, 100);
            })
            .catch(function (error) {
                deferred.reject(error);
            });
        return deferred.promise;

    } // end of getAllCategories

    service.getItemsForCategory = function(categoryShortName) {
        return $http({
            method: 'GET',
            url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
        }).then(function(response) {
            return response.data;
        });
    };// end of getItemsForCategory

}

})();