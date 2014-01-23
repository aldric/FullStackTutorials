/**
 * Created by a.gaudinot on 22/01/14.
 */

'use strict';

angular.module('05AngularApp')
  .factory('CasinoGamesFactory', function ($resource) {
    // Public API here
    return $resource('/api/casinoGames/', {}, {
      show: { method: 'GET', isArray: true}
    });
  });

//TODO Unit Test : using $hhtpBackend mock
angular.module('05AngularApp')
  .factory('CasinoGamesByCategoriesFactory', function ($resource) {
    // Public API here
    return $resource('/api/casinoGamesByCategories/', {}, {
      show: { method: 'GET', isArray: true}
    });
  });
