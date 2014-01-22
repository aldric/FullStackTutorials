/**
 * Created by a.gaudinot on 22/01/14.
 */


'use strict';

angular.module('05AngularApp')
  .factory('LaunchGameFactory', function ($resource) {
    // Public API here
    return $resource('/api/launchGame/:gameId', {}, {
      show: { method: 'GET', isArray: false, params: {gameId: '@gameId'}}
    });
  });

