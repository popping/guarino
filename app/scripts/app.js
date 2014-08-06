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
        'flow',
        'textAngular'
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

guarinoApp.controller('MainCtrl', function($scope) {

    $scope.menuCentral = {
        items: [
            {
                name: 'Home',
                link: '/',
                panel: 'superior',
                direccion: 'horizontal',
                index: 1,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Estudio',
                link: '/estudio',
                panel: 'superior',
                direccion: 'horizontal',
                index: 2,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Galeria',
                link: '/galeria',
                panel: 'superior',
                direccion: 'horizontal',
                index: 3,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Procrear',
                link: '/procrear',
                panel: 'superior',
                direccion: 'horizontal',
                index: 4,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Proyectos',
                link: '',
                panel: 'superior',
                direccion: 'horizontal',
                index: 5,
                popup: false,
                subitem: false,
                items: [
                    {  
                        name: '3d',
                        link: '/3d',
                        panel: 'superior',
                        direccion: 'vertical',
                        index: 6,
                        popup: false,
                        subitem: true,
                        items: null
                    }, 
                    {
                        name: 'Reciclado',
                        link: '/reciclado',
                        panel: 'superior',
                        direccion: 'vertical',
                        index: 7,
                        popup: false,
                        subitem: true,
                        items: null
                    }
                ]
            },
            {
                name: 'Contacto',
                link: '/contacto',
                panel: 'superior',
                direccion: 'horizontal',
                index: 8,
                popup: false,
                subitem: false,
                items: null
            }        
        ]
    };

    $scope.menuLateral = {
        items: [
            {
                name: 'Home',
                link: '/',
                panel: 'lateral',
                direccion: 'vertical',
                index: 1,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Estudio',
                link: '/estudio',
                panel: 'lateral',
                direccion: 'vertical',
                index: 2,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Galeria',
                link: '/galeria',
                panel: 'lateral',
                direccion: 'vertical',
                index: 3,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Procrear',
                link: '/procrear',
                panel: 'lateral',
                direccion: 'vertical',
                index: 4,
                popup: false,
                subitem: false,
                items: null
            },
            {
                name: 'Proyectos',
                link: '',
                panel: 'lateral',
                direccion: 'vertical',
                index: 5,
                popup: false,
                subitem: false,
                items: [
                    {  
                        name: '3d',
                        link: '/3d',
                        panel: 'lateral',
                        direccion: 'vertical',
                        index: 6,
                        popup: false,
                        subitem: true,
                        items: null
                    }, 
                    {
                        name: 'Reciclado',
                        link: '/reciclado',
                        panel: 'lateral',
                        direccion: 'vertical',
                        index: 7,
                        popup: false,
                        subitem: true,
                        items: null
                    }
                ]
            }     
        ]
    };

    $scope.itemSelected     = $scope.menuCentral.items[0];
    $scope.panelAnterior    = '';
    $scope.classAnimation   = '';
    $scope.lastOpenPopup    = null;

    $scope.setSelected      = function(item) {
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

guarinoApp.directive("scrollable", [function () {
    return function(scope, elm) {
        elm.mCustomScrollbar({
                axis: "y",
                theme: "light-3",
                scrollbarPosition: "outside",
                scrollButtons: {
                    enable:true, 
                    scrollType:"stepped"
                },
                keyboard: {
                    scrollType:"stepped"
                },
                autoExpandScrollbar: true,
                scrollInertia: 250,
                advanced: {
                    updateOnContentResize: true
                }
        }); 
    };
}]);

guarinoApp.directive('imageonload', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                alert('image is loaded');
            });
        }
    };
});

guarinoApp.directive('lazzyLoad', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.hide();

            $timeout(function() {
                element.show();
            });
        }
    };
});
