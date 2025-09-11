(function () {
    'use strict';

    angular.module('Data', []);

    angular.module('Data')
        .config(function(){
            console.log("Data config loaded");
            }
        ).run(function(){
            console.log("Data module fired");
        }

        );

})();