/**
 * Created by a.gaudinot on 22/01/14.
 */

'use strict';

describe('Controller: CasinoCtrl', function () {

  // load the controller's module
  beforeEach(module('05AngularApp'));

  var CasinoCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, _CasinoGamesFactory_, _LaunchGameFactory_) {
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('/api/casinoGames')
      .respond([
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

    $httpBackend.whenGET('/api/launchGame/360').respond({ url: 'this is the launch url'});

    scope = $rootScope.$new();
    CasinoCtrl = $controller('CasinoCtrl', {
      $scope: scope,
      CasinoGamesFactory :_CasinoGamesFactory_,
      LaunchGameFactory : _LaunchGameFactory_
    });
  }));

  it('should attach a list of games to the scope', function () {
    $httpBackend.flush();
    expect(scope.games.length).toBe(2);
    $httpBackend.expectGET('/api/casinoGames');
  });

  it('should retrieve launch url when tile is clicked', function () {
    var url = scope.launchGame(360);
    $httpBackend.flush();
    $httpBackend.expectGET('/launchGame/360');
  });

});
