(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject=['UserService'];
    function MyInfoController(UserService){

        var infoCtrl = this;

        infoCtrl.userInfo = UserService.getUserInfo();

    }


})();