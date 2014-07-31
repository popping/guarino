'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:3dCtrl
 * @description
 * # 3dCtrl
 * Controller of the guarinoApp
 */
guarinoApp = angular.module('guarinoApp');
guarinoApp.controller('3dCtrl', function ($scope, $http, $timeout) {
  	$http.get('api/3d').success(function(data) {
		$scope.images = data;

        var totalElements = $scope.images.length;

        for(var i = 0; i < (3 - totalElements); i++) {
            $scope.images[$scope.images.length] = {
                imagen: '',
                texto: ''
            }
        }
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
        if(($scope.pageOffset + 2) < ($scope.images.length - 1)) {
            $scope.rightButtonClick = "button_click";
            $timeout(function() {
                $scope.pageOffset++;
                $scope.rightButtonClick = "";
            }, 150);
        };
    };

    $scope.inPage = function(index) {
        return index >= $scope.pageOffset && index <= $scope.pageOffset + 2; 
    };

    $scope.firstPage = function() {
        return $scope.pageOffset == 0;
    }

    $scope.lastPage = function() {
        return ($scope.pageOffset + 2) >= ($scope.images.length - 1);
    }

    // Scroll de Texto
    $(".texto").mousewheel(function(event, delta) {
        this.scrollTop -= (delta * 30);
        event.preventDefault();
    });

    $scope.pageTextUp = function() {
        $(".texto").scrollTop(-30);
    };

    $scope.pageTextDown = function() {
        $(".texto").scrollTop(30);
    };

    $scope.firstTextPage = function() {
        return false;
    };

    $scope.lastTextPage = function() {
        return false;
    };
});
