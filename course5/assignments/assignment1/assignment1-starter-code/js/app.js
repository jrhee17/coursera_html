(function() {

    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.tooMuchClicked = function () {
            // Check if input is empty
            if($scope.lunchInput == null) {
                $scope.message = "Please enter data first";
                return;
            }

            var menus = $scope.lunchInput.split(',');
            if(menus.length > 3)
                $scope.message = "Too much!";
            else
                $scope.message = "Enjoy!"
        }
    }

})();
