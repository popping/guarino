'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:RecicladoCtrl
 * @description
 * # RecicladoCtrl
 * Controller of the guarinoApp
 */
guarinoApp = angular.module('guarinoApp');

guarinoApp.controller('RecicladoCtrl', function ($scope, $http, $timeout) {
    $http.get('api/reciclado').success(function(data) {
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
        if(typeof($scope.images) != "undefined") {
            return ($scope.pageOffset + 2) >= ($scope.images.length - 1);
        } else {
            return true;
        }
    }

   // Scroll de Texto
    $(".texto").mousewheel(function(event, delta) {
        this.scrollTop -= (delta * 30);
        event.preventDefault();
        $scope.$apply();
    });

    $scope.pageTextUp = function() {
        var scroll = $(".texto").scrollTop() - 60;

        $(".texto").scrollTop(scroll);
    };

    $scope.pageTextDown = function() {
        var scroll = $(".texto").scrollTop() + 60;

        $(".texto").scrollTop(scroll);
    };

    $scope.firstTextPage = function() {
        return $(".texto").scrollTop() == 0;
    };

    $scope.lastTextPage = function() {
        return $(".texto").scrollTop() >= ($('.texto p').height() - $('.texto').height());
    };
});
