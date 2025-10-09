(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);


    function UserService() {

        var service = this;

        var userInfo = null;

        service.saveUserInfo = function (info){
            userInfo = info;
        }

        service.getUserInfo = function () {
            return userInfo;
        }
    }



})();