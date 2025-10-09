(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpFormController', SignUpFormController);


    SignUpFormController.$inject = ['MenuService']
    function SignUpFormController(MenuService) {

        var signUpCtrl = this;

        // Controller exposes user informations and some status markers
        signUpCtrl.user = {};
        signUpCtrl.registered = false;
        signUpCtrl.invalidItem = false;

        signUpCtrl.submit= function (){
            signUpCtrl.registered = true;

            var shortName = signUpCtrl.user.dish.toUpperCase();
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
                        // var result = MenuService.saveUser(JSON.stringify(signUpCtrl.user))
                        console.log('form sent:', signUpCtrl.user);
                        console.log('form saved: ' + result);
                    }
                })
                .catch(function (error) {
                    console.error("error fetching the dish", error);
                    signUpCtrl.invalidItem = true;
                });
        };
    }

})();
