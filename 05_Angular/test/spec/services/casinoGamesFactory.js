/**
 * Created by a.gaudinot on 22/01/14.
 */
'use strict';

describe('Service: CasinoGamesFactory', function () {
  // load the service's module
  beforeEach(module('05AngularApp'));

  // instantiate service
  var CasinoGamesFactory,
    $httpBackend;

  beforeEach(inject(function (_$httpBackend_, _CasinoGamesFactory_) {
    $httpBackend = _$httpBackend_;
    CasinoGamesFactory = _CasinoGamesFactory_;

    $httpBackend.whenGET('/api/casinoGames').respond([
      {
        'id': 383,
        'name': 'Deck The Halls',
        'supplier': 'QuickFire',
        'categoryId': 637,
        'categoryName': 'All',
        'linkImage': 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/160x120_Deck_the_halls.jpg',
        'launcherImage': 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/308x160_Deck_the_halls.jpg',
        'carouselImage': 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/616x320_Deck_the_halls.jpg'
      },
      {
        'id': 832,
        'name': 'Thunderstruck',
        'supplier': 'QuickFire',
        'categoryId': 637,
        'categoryName': 'All',
        'linkImage': 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/160x120_thunderstruck.jpg',
        'launcherImage': 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/308x160_thunderstruck.jpg',
        'carouselImage': 'https://betclick.hs.llnwd.net/e1/pict/Casino/05_mobile/616x320_thunderstruck.jpg'
      }
    ]);
  }));

  it('should do GET an array of casino games', function () {
    var images = CasinoGamesFactory.query();
    $httpBackend.flush();
    $httpBackend.expectGET('/api/casinoGames');
    expect(images.length).toBe(2);
    expect(images[0].id).toBe(383);
    expect(images[1].id).toBe(832);
  });
});
