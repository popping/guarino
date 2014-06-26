'use strict';

describe('Controller: RecicladoCtrl', function () {

  // load the controller's module
  beforeEach(module('guarinoApp'));

  var RecicladoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecicladoCtrl = $controller('RecicladoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
