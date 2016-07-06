'use strict';

/**
 * @ngdoc function
 * @name kimenApp.controller:PuntoInteresCtrl
 * @description
 * # PuntoInteresCtrl
 * Controller of the kimenApp
 */

angular.module('kimenApp')
  .controller('PuntoInteresCtrl', function ($scope, piFactory) {
    //esta esta función captura los datos enviados desde el formulario
     $scope.datos = "";

    $scope.crearPuntoInteres = function () {
    
    piFactory.save({ punto_intere: $scope.datos}, function () {
 		$scope.datos = "";
 			});
 		};
  });

