'use strict';

/**
 * @ngdoc directive
 * @name guarinoApp.directive:lazzyLoad
 * @description
 * # lazzyLoad
 */
var guarinoApp = angular.module('guarinoApp');

guarinoApp.directive('lazzyLoad', function($timeout) {
    return {
        restrict: 'A',
        link: function link(scope, element, attrs) {
            $timeout(function() {
                element.show();
            });
        }
    };
});
