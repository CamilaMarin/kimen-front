'use strict';

describe('Controller: PuntoInteresCtrl', function () {

  // load the controller's module
  beforeEach(module('kimenApp'));

  var PuntoInteresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PuntoInteresCtrl = $controller('PuntoInteresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PuntoInteresCtrl.awesomeThings.length).toBe(3);
  });
});
