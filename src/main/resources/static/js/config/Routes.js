define(function () {

    function Route($routeProvider) {

        'use strict';

        var templateDirectory = './js/views/';

        var configSidebar = {
            templateUrl: templateDirectory + 'sidebar.html',
            controller: 'SidebarController'
        };

        // User Templates
        var userCreate = { templateUrl: templateDirectory + 'user/user-create.html' };
        var userList = { templateUrl: templateDirectory + 'user/user-list.html' };
        var userUpdate = { templateUrl: templateDirectory + 'user/user-update.html' };

        //map
        var mapView = { templateUrl: templateDirectory + 'map/gmap.html'};

        $routeProvider
            .when('/users/create', userCreate)
            .when('/users/list', userList)
            .when('/users/update', userUpdate)

            .when('/maps/map', mapView)

            //redirect to homepage if no url mapping found (future feature)
            .otherwise('/users/create', userCreate);

    };

    return ['$routeProvider', Route];

});

