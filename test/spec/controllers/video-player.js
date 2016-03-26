'use strict';

describe('Controller: VideoPlayerCtrl', function () {

  // load the controller's module
  beforeEach(module('bluegalloApp'));

  var VideoPlayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideoPlayerCtrl = $controller('VideoPlayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VideoPlayerCtrl.awesomeThings.length).toBe(3);
  });
});
