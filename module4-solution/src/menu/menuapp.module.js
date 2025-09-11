(function () {
    'use strict';

    angular.module('MenuApp', ['ui.router', 'Data']).run(
        function () {
            console.log("MenuApp module fired");
        }
    );

})();