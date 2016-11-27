(function() {
    'use strict!';

    angular.module('public')
        .service('SignupService', SignupService)
        .constant('BASE_CATEGORIES_URL', 'https://peaceful-castle-82696.herokuapp.com/categories.json');

    SignupService.$inject = ['BASE_CATEGORIES_URL', '$http'];
    function SignupService(BASE_CATEGORIES_URL, $http) {
        var service = this;

        service.getCategories = function() {
            console.log('SignupService.getCategories()');
            
            $http({
                url: BASE_CATEGORIES_URL,
                method: 'GET'
            }).then(function success(response){
                var data = response.data;
                service.categories = [];
                for(var i = 0; i < data.length; i++) {
                    service.categories.push(data[i]);
                    console.log(data[i]);
                }
            }, function error(response){
                console.log('failure: ' + response);
            });
        }

        service.getCategories();
    };
})();
