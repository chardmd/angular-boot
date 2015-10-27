define(function (require) {
   'use strict';

    function Services($provide) {

        $provide.service('restService', require('services/RestService'));
        $provide.service('imageUploadService', require('services/ImageUploadService'));

    }

    return ['$provide', Services];
});