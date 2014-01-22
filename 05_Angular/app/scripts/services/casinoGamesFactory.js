/**
 * Created by a.gaudinot on 22/01/14.
 */

'use strict';

angular.module('05AngularApp')
  .factory('CasinoGamesFactory', function ($resource) {
    // Public API here
    return $resource('/api/casinoGames', {}, {
      show: { method: 'GET', isArray: true}
    });
  });
