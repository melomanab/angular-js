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
        // Categories page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/main-categories.template.html',
                controller: 'MainCategoriesController as categoriesList',
                // The resolve will use the MenuDataService to retrieve categories
                // and inject them into the controller.
                resolve: {
                    items: ['MenuDataService', function(MenuDataService){
                        console.log("--> Invoke MenuDataService.getAllCategories()");
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
        // Items view
        .state('items', {
            url: '/items',
            templateUrl: 'src/menu/templates/items.template.html'
        })

    }



})();