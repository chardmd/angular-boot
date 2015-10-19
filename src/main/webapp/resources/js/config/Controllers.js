define(function(require) {
   'use strict';

    function Controllers($controllerProvider) {

        $controllerProvider.register('SidebarController', require('controllers/Sidebar'));
        $controllerProvider.register('UserController', require('controllers/UserController'));
        $controllerProvider.register('View2Controller', require('controllers/View2'));

    };

    return ['$controllerProvider', Controllers];

});