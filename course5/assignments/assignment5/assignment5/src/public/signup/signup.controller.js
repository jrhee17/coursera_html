(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController)
.constant('BASE_MENU_URL', 'https://peaceful-castle-82696.herokuapp.com/menu_items/');

SignupController.$inject = ['$http', 'BASE_MENU_URL', 'SignupService'];
function SignupController($http, BASE_MENU_URL, SignupService) {
  var $ctrl = this;
  $ctrl.initialized = false;

  $ctrl.submit = function() {
    $http({
        method: 'GET',
        url: BASE_MENU_URL + $ctrl.user.favorite + '.json'
    }).then(function success(response) {
        $ctrl.success = true;
        $ctrl.initialized = true;
        SignupService.data = response.data;
        SignupService.user = $ctrl.user;
        SignupService.success = true;
        return response.data;
    }, function error(response) {
        console.log('Error: ' + response);
        $ctrl.success = false;
        $ctrl.initialized = true;
        SignupService.success = false;
        return [];
    });
  }
}


})();
