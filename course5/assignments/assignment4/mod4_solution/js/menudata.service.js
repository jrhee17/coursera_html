(function() {
    'use strict!';
    angular.module('data').
        service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var menuData = this;

        menuData.getAllCategories = function() {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/categories.json',
                method: 'GET'
            });
        };

        menuData.getItemsForCategory = function (categoryShortName) {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName,
                method: 'GET'
            });
        };
    };

})();
