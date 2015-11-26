define(function () {

    function Route($stateProvider, $urlRouterProvider) {

        'use strict';

        var templateDirectory = './js/views/';

        $stateProvider
            // Parent Template for forms
            .state('common', {
                abstract: true,
                templateUrl: templateDirectory + 'common.html'
            })

            //User
            .state('user-create', {
                parent: 'common',
                url: '/users/create',
                templateUrl: templateDirectory + 'user/user-create.html'
            })
            .state('user-list', {
                parent: 'common',
                url: '/users/list',
                templateUrl: templateDirectory + 'user/user-list.html'
            })
            .state('user-update', {
                parent: 'common',
                url: '/users/update',
                templateUrl: templateDirectory + 'user/user-update.html'
            })

            //MAP
            .state('map', {
                parent: 'common',
                url: '/maps/map',
                templateUrl: templateDirectory + 'map/gmap.html'
            });

            //redirect to homepage if no url mapping found
            $urlRouterProvider.otherwise('/users/create');
    };

    return ['$stateProvider', '$urlRouterProvider', Route];

});

