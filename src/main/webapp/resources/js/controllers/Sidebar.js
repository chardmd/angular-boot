define(function() {
    'use strict';

    var SidebarController = function($scope, $location) {

        console.log('Sidebar Controller');

        $scope.isActive = function(viewLocation) {
            var active = ($location.path().indexOf(viewLocation) === 0);
            return active;
        }

    };

    return ['$scope', '$location', SidebarController];

});