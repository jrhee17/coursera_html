(function() {
    'use strict!';
    angular.module('MenuApp').
        config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.
            state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            }).
            state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesController as categoriesController',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories().then(function(response) {
                            console.log('categories: ' + response.data);
                            return response.data;
                        });
                    }]
                }
            }).
            state('items', {
                url: '/items/{itemName}',
                templateUrl: 'templates/items.html',
                controller: 'ItemsController as itemsController',
                resolve: {
                    item: ['$stateParams', 'MenuDataService', 
                    function($stateParams, MenuDataService) {
                        console.log('$stateParams: ' + $stateParams.itemName);
                        return MenuDataService.getItemsForCategory($stateParams.itemName).then(function(response) {
                            console.log('item: ' + response.data);
                            return response.data.menu_items;
                        });
                    }]
                }
            });
    }
})();
