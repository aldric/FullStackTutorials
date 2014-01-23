'use strict';

angular.module('05AngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/casino',
        controller: 'CasinoCtrl'
      })
      .when('/casino', {
        templateUrl: 'partials/casino',
        controller: 'CasinoCtrl'
      })
      .when('/casino/categories', {
        templateUrl: 'partials/categories',
        controller: 'CasinoByCategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });