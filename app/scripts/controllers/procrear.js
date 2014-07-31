'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:ProcrearCtrl
 * @description
 * # ProcrearCtrl
 * Controller of the guarinoApp
 */
var guarinoApp = angular.module('guarinoApp')
guarinoApp.controller('ProcrearCtrl', function ($scope) {
    $(".texto").mousewheel(function(event, delta) {
        this.scrollTop -= (delta * 30);
        event.preventDefault();
    });
});
