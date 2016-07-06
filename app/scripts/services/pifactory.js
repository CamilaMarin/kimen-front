'use strict';

/**
 * @ngdoc service
 * @name kimenApp.piFactory
 * @description
 * # piFactory
 * Factory in the kimenApp.
 */
angular.module('kimenApp')
  .factory('piFactory', function ($resource) {
    return $resource('http://kimen-back.herokuapp.com/api/v1/punto_interes.json');
  });
