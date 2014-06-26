'use strict';

describe('Controller: ProcrearCtrl', function () {

  // load the controller's module
  beforeEach(module('guarinoApp'));

  var ProcrearCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProcrearCtrl = $controller('ProcrearCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
