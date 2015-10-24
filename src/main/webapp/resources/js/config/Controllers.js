define(function(require) {
   'use strict';

    function Controllers($controllerProvider) {

        $controllerProvider.register('SidebarController', require('controllers/Sidebar'));
        $controllerProvider.register('UserController', require('controllers/UserController'));
        $controllerProvider.register('MapController', require('controllers/MapController'));

    };

    return ['$controllerProvider', Controllers];

});