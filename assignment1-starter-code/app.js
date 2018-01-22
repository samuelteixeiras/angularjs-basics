(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
    
        $scope.message = "";

        $scope.getMessage = function (){

            if(!$scope.lunchMenu){
                $scope.message = "Please enter data first";
            } else {
                var menu = $scope.lunchMenu.split(",");
                if(menu.length > 3)
                    $scope.message = "Too much!";
                else
                    $scope.message = "Enjoy!";
            }

           
        };
    });
    
    })();