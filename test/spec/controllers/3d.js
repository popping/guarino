'use strict';

describe('Controller: 3dCtrl', function () {

  // load the controller's module
  beforeEach(module('guarinoApp'));

  var 3dCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    3dCtrl = $controller('3dCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
