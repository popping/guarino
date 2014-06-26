'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the guarinoApp
 */
angular.module('guarinoApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
