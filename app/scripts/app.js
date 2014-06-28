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

