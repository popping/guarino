'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the guarinoApp
 */
guarinoApp = angular.module('guarinoApp')
guarinoApp.controller('GaleriaCtrl', function ($scope, $http, $timeout) {
    $http.get('api/galeria').success(function(data) {
		$scope.images = data; 
    });

    $scope.actual           = 0;
    $scope.pageOffset       = 0;
    $scope.leftButtonClick  = "";
    $scope.rightButtonClick = "";

    $scope.isCurrentIndex = function(index) {
    	return $scope.actual == index;
    };

    $scope.setCurrentIndex = function(index) {
    	$scope.actual = index;	
    };

    $scope.prevPage = function() {
    	if($scope.pageOffset > 0) {
            $scope.leftButtonClick = "button_click";
            $timeout(function() {
    		    $scope.pageOffset--;
                $scope.leftButtonClick = "";
            }, 150);
    	};
    };

    $scope.nextPage = function() {
    	if(($scope.pageOffset + 5) < ($scope.images.length -1)) {
            $scope.rightButtonClick = "button_click";
            $timeout(function() {
    		    $scope.pageOffset++;
                $scope.rightButtonClick = "";
            }, 150);
    	};
    };

    $scope.inPage = function(index) {
    	return index >= $scope.pageOffset && index <= $scope.pageOffset + 5; 
    };

    $scope.firstPage = function() {
        return $scope.pageOffset == 0;
    }

    $scope.lastPage = function() {
        return ($scope.pageOffset + 5) == ($scope.images.length - 1);
    }
});
