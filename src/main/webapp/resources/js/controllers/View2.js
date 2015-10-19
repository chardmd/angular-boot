define(function() {
   'use strict';


   var View2Controller = function($scope) {

      console.log('View 2 Controller!');


      $scope.welcomeMessage = 'Welcome to View2Controller';

   };

   return ['$scope', View2Controller];

});