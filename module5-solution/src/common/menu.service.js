(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {

    var service = this;

      service.getCategories = function () {
        return $http.get(ApiPath + '/categories.json').then(function (response) {
          return response.data;
        });
      };


      service.getMenuItems = function (category) {
        return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
          return response.data;
        });
      };

    service.getMenuItem = function (short_name) {
        console.log("-->MenuService#getMenuItem")
        console.log(short_name);
        console.log("short_name[0]: " + short_name[0]);
        console.log("short_name[1]: " + short_name[1]);
        return $http.get(ApiPath + '/menu_items/' + short_name[0] + '/menu_items/' +  (short_name[1]-1) + '.json').then(function (response) {
            return response.data;
        });
    };

}



})();
