(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpFormController', SignUpFormController);


    SignUpFormController.$inject = ['MenuService', 'UserService'];
    function SignUpFormController(MenuService, UserService) {

        var signUpCtrl = this;

        // Controller exposes user informations and some status markers
        signUpCtrl.user = {};
        signUpCtrl.registered = false;
        signUpCtrl.invalidItem = false;

        signUpCtrl.submit= function (){
            signUpCtrl.registered = true;

            var shortName = null;
            shortName = signUpCtrl.user.dish.toUpperCase();
            console.log(shortName);

            // Call the menu service to find the selected dish
            MenuService.getMenuItem(shortName)
                .then(function (selectedItem) {
                    if (selectedItem === null) {
                        signUpCtrl.invalidItem = true;
                        console.log("selected item null for short name: " , signUpCtrl.user.dish);
                    } else {
                        signUpCtrl.invalidItem = false;
                        console.log("selected item not null");

                        signUpCtrl.user.selectedItem = selectedItem;
                        console.log("selected item saved into user: " + signUpCtrl.user);

                        // Save favorite dish
                        var result = UserService.saveUserInfo(JSON.stringify(signUpCtrl.user))
                        console.log('User info saved:', signUpCtrl.user);

                        // console.log(UserService.getUserInfo());
                    }
                })
                .catch(function (error) {
                    console.error("error fetching the dish", error);
                    signUpCtrl.invalidItem = true;
                });
        };
    }

})();
