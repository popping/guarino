'use strict';

/**
 * @ngdoc directive
 * @name guarinoApp.directive:ngFocus
 * @description
 * # ngFocus
 */
var guarinoApp = angular.module('guarinoApp');
guarinoApp.directive('ngFocus', function () {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            element.focus();
        }
    };
});
