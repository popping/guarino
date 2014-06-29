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
        'ngTouch'
]);
    
guarinoApp.config(function ($routeProvider) {
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
        .when('/proyectos', {
          templateUrl: 'views/proyectos.html',
          controller: 'ProyectosCtrl'
        })
        .when('/proyectos/3d', {
          templateUrl: 'views/3d.html',
          controller: '3dCtrl'
        })
        .when('/proyectos/reciclado', {
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

guarinoApp.controller('MainCtrl', function($scope) {
    $scope.itemSelected = 0;
    $scope.classAnimation = '';

    $scope.menuCentral = {
        items: [
            {
                name: 'Home',
                link: '#/',
                direccion: 'horizontal',
                items: null
            },
            {
                name: 'Estudio',
                link: '#/estudio',
                direccion: 'horizontal',
                items: null
            },
            {
                name: 'Galeria',
                link: '#/galeria',
                direccion: 'horizontal',
                items: null
            },
            {
                name: 'Procrear',
                link: '#/procrear',
                direccion: 'horizontal',
                items: null
            },
            {
                name: 'Proyectos',
                direccion: 'horizontal',
                link: '',
                items: [
                    {  
                        name: '3d',
                        link: '#/proyectos/3d',
                        direccion: 'vertical'
                    }, 
                    {
                        name: 'Reciclado',
                        link: '#/proyectos/reciclado',
                        direccion: 'vertical'
                    }
                ]
            },
            {
                name: 'Contacto',
                link: '#/contacto',
                direccion: 'horizontal',
                items: null
            }        
        ]
    };

    $scope.menuLateral = {
        items: [
            {
                name: 'Home',
                link: '#/',
                direccion: 'vertical',
                items: null
            },
            {
                name: 'Estudio',
                link: '#/estudio',
                direccion: 'vertical',
                items: null
            },
            {
                name: 'Galeria',
                link: '#/galeria',
                direccion: 'vertical',
                items: null
            },
            {
                name: 'Procrear',
                link: '#/procrear',
                direccion: 'vertical',
                items: null
            },
            {
                name: 'Proyectos',
                link: '#/proyectos',
                direccion: 'vertical',
            }     
        ]
    };

    $scope.setSelected = function(direccion, index) {
        if($scope.itemSelected != index) {
            if(direccion == 'horizontal') {
                if($scope.itemSelected > index) {
                    $scope.classAnimation = 'animation-right';
                } else {
                    $scope.classAnimation = 'animation-left';
                }
            } else {
                if($scope.itemSelected > index) {
                    $scope.classAnimation = 'animation-down';
                } else {
                    $scope.classAnimation = 'animation-up';
                }
            }
        }

        $scope.itemSelected = index;
    };
});

