'use strict';

/**
 * @ngdoc service
 * @name guarinoApp.menuFactory
 * @description
 * # menuFactory
 * Factory in the guarinoApp.
 */
var guarinoApp = angular.module('guarinoApp');

guarinoApp.factory('menuFactory', function($resource) {
    return {
        menuCentral: $resource('../../data/menuCentral.json', {}, 
            { get: { method: "GET", isArray: false }
        }),
        menuLateral: $resource('../../data/menuLateral.json', {}, 
            { get: { method: "GET", isArray: false }
        })
    };
});
