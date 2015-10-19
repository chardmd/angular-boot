define(function (require) {
   'use strict';

    function Services($provide) {

        $provide.service('restService', require('services/RestService'));

    }

    return ['$provide', Services];
});