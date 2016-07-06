'use strict';

/**
 * @ngdoc overview
 * @name kimenApp
 * @description
 * # kimenApp
 *
 * Main module of the application.
 */
angular
  .module('kimenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/myroutes', {
        templateUrl: 'views/myroutes.html',
        controller: 'MyroutesCtrl',
        controllerAs: 'myroutes'
      })
      .when('/punto_interes', {
        templateUrl: 'views/punto_interes.html',
        controller: 'PuntoInteresCtrl',
        controllerAs: 'puntoInteres'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
