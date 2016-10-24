(function() {

    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.textColor = "#000000";
        $scope.borderColor = "#ffffff";
        $scope.tooMuchClicked = function () {
            // Check if input is empty
            if($scope.lunchInput == "" || $scope.lunchInput == null) {
                $scope.message = "Please enter data first";
                $scope.textColor = "red";
                $scope.borderColor = "red";
                return;
            }

            var menus = $scope.lunchInput.split(',');
            menus = menus.filter(Boolean);
            console.log(menus);
            if(menus.length > 3) {
                $scope.message = "Too much!";
                $scope.textColor = "red";
                $scope.borderColor = "red";
            } else {
                $scope.message = "Enjoy!"
                $scope.textColor = "green";
                $scope.borderColor = "green";
            }
        }
    }

})();
