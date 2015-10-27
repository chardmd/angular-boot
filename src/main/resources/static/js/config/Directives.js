define(function(require) {
    'use strict';

    function Directives($compileProvider) {

        $compileProvider.directive('userdirective', require('directives/UserDirective'));

    };

    return ['$compileProvider', Directives];

});