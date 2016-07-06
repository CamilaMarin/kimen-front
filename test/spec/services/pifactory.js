'use strict';

describe('Service: piFactory', function () {

  // load the service's module
  beforeEach(module('kimenApp'));

  // instantiate service
  var piFactory;
  beforeEach(inject(function (_piFactory_) {
    piFactory = _piFactory_;
  }));

  it('should do something', function () {
    expect(!!piFactory).toBe(true);
  });

});
