(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject=['UserService'];
    function MyInfoController(UserService){

        var infoCtrl = this;

        infoCtrl.userInfo = UserService.getUserInfo();

        console.log("Fetched user info : " + infoCtrl.userInfo);

        infoCtrl.getUserInfo = infoCtrl.getUserInfo;

    }


})();