'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the guarinoApp
 */
guarinoApp = angular.module('guarinoApp');
guarinoApp.controller('ContactoCtrl', function ($scope) {
    $scope.submitmail = function(contacto) {
    	alert("Ha Mandado un mail");
    	console.log("name: " + contacto.name);
    	console.log("email: " + contacto.email);
    	console.log("message: " + contacto.message);
    }
});
