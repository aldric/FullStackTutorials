'use strict';

angular.module('05AngularApp')
  .controller('CasinoCtrl', ['$scope', '$http', '$location', 'CasinoGamesFactory', 'LaunchGameFactory', function ($scope, $http, $location, CasinoGamesFactory, LaunchGameFactory) {
    //Step 1 : use of http request
    /*$http.get('/api/casinoGames').success(function(games) {
     $scope.games = games;
     });*/

    $scope.games = CasinoGamesFactory.show();

    $scope.currentLaunchUrl = undefined;

    $scope.byCategories = function () {
      //https://betclicstage.net/st2/svcmobile/api/casino/gamesbycategory
      $scope.games = CasinoGamesByCategoriesFactory.show();
    }

    $scope.launchGame = function (gameId) {
      LaunchGameFactory.show({ gameId: gameId}, function (response) {
        $scope.currentLaunchUrl = response.url.replace(/lobbyURL=.*?([&?])/i, function (match, $1) {
          return $1 == '&' ? 'lobbyURL=' + $location.absUrl() + $1 : 'lobbyURL=' + $location.absUrl()
        });
        console.log('$scope.currentLaunchUrl : %s', $scope.currentLaunchUrl);
      });
    };

  }]);

//TODO Unit Test
angular.module('05AngularApp')
  .controller('CasinoByCategoriesCtrl', ['$scope', '$http', '$location', 'CasinoGamesByCategoriesFactory', 'LaunchGameFactory', function ($scope, $http, $location, CasinoGamesByCategoriesFactory, LaunchGameFactory) {

    //https://betclicstage.net/st2/svcmobile/api/casino/gamesbycategory
    $scope.gamesByCategories = CasinoGamesByCategoriesFactory.show();

    $scope.searchText = '';

    $scope.launchGame = function (gameId) {
      console.log('$scope.searchText >> ' + $scope.searchText);
      LaunchGameFactory.show({ gameId: gameId}, function (response) {
        $scope.currentLaunchUrl = response.url.replace(/lobbyURL=.*?([&?])/i, function (match, $1) {
          return $1 == '&' ? 'lobbyURL=' + $location.absUrl() + $1 : 'lobbyURL=' + $location.absUrl()
        });
        console.log('$scope.currentLaunchUrl : %s', $scope.currentLaunchUrl);
      });
    };
  }]);
