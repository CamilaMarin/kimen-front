'use strict';

describe('Controller: MyroutesCtrl', function () {

  // load the controller's module
  beforeEach(module('kimenApp'));

  var MyroutesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyroutesCtrl = $controller('MyroutesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyroutesCtrl.awesomeThings.length).toBe(3);
  });
});
