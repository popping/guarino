'use strict';

/**
 * @ngdoc function
 * @name guarinoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guarinoApp
 */
angular.module('guarinoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
