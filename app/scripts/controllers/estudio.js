'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:EstudioCtrl
 * @description
 * # EstudioCtrl
 * Controller of the guarinoApp
 */
var guarinoApp = angular.module('guarinoApp')
guarinoApp.controller('EstudioCtrl', function ($scope) {
    $(".texto").mousewheel(function(event, delta) {
        this.scrollTop -= (delta * 30);
        event.preventDefault();
    });
});
