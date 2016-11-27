(function() {
    'use strict!';

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['user', 'data', 'success'];
    function MyinfoController(user, data, success) {
        var $ctrl = this;
        $ctrl.user = user;
        $ctrl.data = data;
        $ctrl.success = success;

    };

})();
