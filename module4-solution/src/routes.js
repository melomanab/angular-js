(function (){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){

        // Redirect to home page if no URL matches
        $urlRouterProvider.otherwise('/');

        // === Define states ===
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
                }
            )

    }



})();