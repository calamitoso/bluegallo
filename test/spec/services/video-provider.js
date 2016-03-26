'use strict';

describe('Service: videoProvider', function () {

  // load the service's module
  beforeEach(module('bluegalloApp'));

  // instantiate service
  var videoProvider;
  beforeEach(inject(function (_videoProvider_) {
    videoProvider = _videoProvider_;
  }));

  it('should do something', function () {
    expect(!!videoProvider).toBe(true);
  });

});
