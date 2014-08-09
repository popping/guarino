'use strict';

describe('Directive: lazzyLoad', function () {

  // load the directive's module
  beforeEach(module('guarinoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lazzy-load></lazzy-load>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lazzyLoad directive');
  }));
});
