'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:RecicladoCtrl
 * @description
 * # RecicladoCtrl
 * Controller of the guarinoApp
 */
guarinoApp = angular.module('guarinoApp');

guarinoApp.controller('RecicladoCtrl', function ($scope, $http) {

    $http.get('api/reciclado').success(function(data) {
		$scope.images = data; 
    });

    $scope.actual = 0;
    $scope.isCurrentIndex = function(index) {
    	return $scope.actual == index;
    };
    $scope.setCurrentIndex = function(index) {
    	$scope.actual = index;	
    }
});
