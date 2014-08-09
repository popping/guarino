'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the guarinoApp
 */
var guarinoApp = angular.module('guarinoApp');

guarinoApp.controller('ContactoCtrl', function ($scope, $http, $timeout) {
    $scope.contacto = {
        name: '',
        email: '',
        telefono: '',
        message: ''
    };

    $scope.mensaje = '';     

    $scope.submitmail = function(contacto) {
        $http.post('/api/sendmail', contacto).success(function(data) {
            $scope.mensaje = data;

            $timeout(function() {
                $scope.contacto.name        = '';
                $scope.contacto.email       = '';
                $scope.contacto.telefono    = '';
                $scope.contacto.message     = '';
                $scope.mensaje              = '';     

                $('#name').focus();           
            }, 2000);
        });
    }
});

