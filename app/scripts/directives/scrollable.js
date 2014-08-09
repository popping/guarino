'use strict';

/**
 * @ngdoc directive
 * @name guarinoApp.directive:scrollable
 * @description
 * # scrollable
 */
var guarinoApp = angular.module('guarinoApp');

guarinoApp.directive("scrollable", function () {
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
});