define(function () {

    function Route($routeProvider) {

        'use strict';

        var templateDirectory = '/resources/js/views/';

        var configSidebar = {
            templateUrl: templateDirectory + 'sidebar.html',
            controller: 'SidebarController'
        };

        var configView2 = {
            templateUrl: templateDirectory + 'view2.html'
        };

        // User Templates
        var userCreate = { templateUrl: templateDirectory + 'user/user-create.html' };
        var userList = { templateUrl: templateDirectory + 'user/user-list.html' };
        var userUpdate = { templateUrl: templateDirectory + 'user/user-update.html' };

        $routeProvider
            .when('/users/create', userCreate)
            .when('/users/list', userList)
            .when('/users/update', userUpdate)

            .when('/view2', configView2)

            //redirect to homepage if no url mapping found (future feature)
            .otherwise('/users/create', userCreate);

    };

    return ['$routeProvider', Route];

});

