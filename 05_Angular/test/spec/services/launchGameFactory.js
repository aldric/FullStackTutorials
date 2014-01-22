/**
 * Created by a.gaudinot on 22/01/14.
 */
'use strict';

describe('Service: LaunchGameFactory', function () {
  // load the service's module
  beforeEach(module('05AngularApp'));

  // instantiate service
  var LaunchGameFactory,
    $httpBackend;

  beforeEach(inject(function (_$httpBackend_, _LaunchGameFactory_) {
    $httpBackend = _$httpBackend_;
    LaunchGameFactory = _LaunchGameFactory_;

    $httpBackend.whenGET('/api/launchGame/360').respond(
      {
        'url': 'this is a launchUrl'
      });
  }));

  it('should do GET an object with launch Url ', function () {
    var url = LaunchGameFactory.show({ gameId : 360 });
    $httpBackend.flush();
    $httpBackend.expectGET('api/launchGame/360');
    expect(url.url).toBe('this is a launchUrl');
  });
});
