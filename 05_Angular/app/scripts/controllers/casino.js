'use strict';

angular.module('05AngularApp')
  .controller('CasinoCtrl', ['$scope', '$http', 'CasinoGamesFactory', 'LaunchGameFactory', function ($scope, $http, CasinoGamesFactory, LaunchGameFactory) {
    //Step 1 : use of http request
    /*$http.get('/api/casinoGames').success(function(games) {
     $scope.games = games;
     });*/

    $scope.games = CasinoGamesFactory.show();

    $scope.launchGame = function (gameId) {
      LaunchGameFactory.show({ gameId: gameId}, function (response) {
        console.log(response.url);
        return response;
      });
    };
  }]);
