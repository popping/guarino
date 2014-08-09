'use strict';

/**
 * @ngdoc overview
 * @name guarinoApp
 * @description
 * # guarinoApp
 *
 * Main module of the application.
 */
var guarinoApp = angular.module('guarinoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'flow'
]);
    
guarinoApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/estudio', {
            templateUrl: 'views/estudio.html',
            controller: 'EstudioCtrl'
        })
        .when('/galeria', {
          templateUrl: 'views/galeria.html',
          controller: 'GaleriaCtrl'
        })
        .when('/procrear', {
          templateUrl: 'views/procrear.html',
          controller: 'ProcrearCtrl'
        })
        .when('/3d', {
          templateUrl: 'views/3d.html',
          controller: '3dCtrl'
        })
        .when('/reciclado', {
          templateUrl: 'views/reciclado.html',
          controller: 'RecicladoCtrl'
        })
        .when('/contacto', {
          templateUrl: 'views/contacto.html',
          controller: 'ContactoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

guarinoApp.controller('MainCtrl', function($scope, $timeout, menuFactory) {
    // Cargo los menues
    menuFactory.menuCentral.get(function(items) {
        $scope.menuCentral  = items;    
        $scope.itemSelected = $scope.menuCentral.items[0];
    });

    menuFactory.menuLateral.get(function(items) {
        $scope.menuLateral = items;
    });

    $scope.panelAnterior    = '';
    $scope.classAnimation   = '';
    $scope.lastOpenPopup    = null;

    $scope.setSelected = function(item) {
        var panel       = item.panel;
        var direccion   = item.direccion;
        var index       = item.index;
        var popup       = item.items !== null;
        var cambioPanel = false;

        if(popup) {
            item.popup = !item.popup;

            if($scope.lastOpenPopup !== null) {
                $scope.lastOpenPopup.popup = false;                
            }

            $scope.lastOpenPopup = item;
        } else {
            if($scope.itemSelected.index !== index) {
                if($scope.panelAnterior !== '' && $scope.panelAnterior !== panel) {
                    cambioPanel = true;            
                }

                if(direccion === 'horizontal') {
                    if(cambioPanel || ($scope.itemSelected.index < index)) {
                        $scope.classAnimation = 'animation-left';
                    } else {
                        $scope.classAnimation = 'animation-right';
                    }
                } else {
                    if(cambioPanel || $scope.itemSelected.index < index) {
                        $scope.classAnimation = 'animation-up';
                    } else {
                        $scope.classAnimation = 'animation-down';
                    }
                }
            }

            if(!item.subitem && $scope.lastOpenPopup !== null) {
                $scope.lastOpenPopup.popup = false;
                $scope.lastOpenPopup = null;
            }
        }

        $scope.itemSelected = item;
        $scope.panelAnterior = panel;
    };
});
