define(function() {
   'use strict';


   var MapController = function($scope, uiGmapGoogleMapApi) {

      uiGmapGoogleMapApi.options = {

         transport: 'https',
         isGoogleMapsForWork: false,
         china: false,
         v: '3',
         libraries: 'places',
         language: 'en',
         sensor: 'false'
      };

      $scope.map = {

         center: {
            latitude: 0,
            longitude: 0
         },
         zoom: 20,
         options: {
            scrollwheel: false
         }
      };

      //marker
      $scope.marker = {
         id: 0,
         coords: {
            latitude: 0,
            longitude: 0
         }
      };

      var events = {

         places_changed: function (searchBox) {

            var searchPlace = searchBox.getPlaces()[0];
            var lat = searchPlace.geometry.location.lat();
            var lng = searchPlace.geometry.location.lng();

            $scope.marker.coords = {
               latitude: lat,
               longitude: lng
            }

            $scope.map.center = {
               latitude: lat,
               longitude: lng
            }
            $scope.map.zoom = 20;

            //set latitude and longitude fields
            $scope.latitude = lat;
            $scope.longitude = lng;
         }
      };

      $scope.searchbox = {
         template: './js/views/templates/google-searchbox.html',
         events: events,
         position: 'top-right'
      };

   };

   return ['$scope', 'uiGmapGoogleMapApi', MapController];

});