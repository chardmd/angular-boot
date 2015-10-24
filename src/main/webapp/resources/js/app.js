require.config({
    paths: {
        'lodash': '/resources/bower_components/lodash/lodash.min',
        'async': '/resources/bower_components/requirejs-plugins/src/async',
        'angular': '/resources/bower_components/angular/angular',
        'angular/angularRoute': '/resources/bower_components/angular-route/angular-route',
        'angular/angularMessages': '/resources/bower_components/angular-messages/angular-messages',
        'angular/ngDialog':'/resources/bower_components/ng-dialog/js/ngDialog',
        'angular/angular-flash-alert': '/resources/bower_components/angular-flash-alert/dist/angular-flash.min',
        'angular/smart-table': '/resources/bower_components/angular-smart-table/dist/smart-table.min',
        'angular/ng-file-upload': '/resources/bower_components/ng-file-upload/ng-file-upload.min',
        'angular/checklist-model': '/resources/bower_components/checklist-model/checklist-model',
        'angular/simpleLogger': '/resources/bower_components/angular-simple-logger/dist/angular-simple-logger',
        'angular/googleMaps': '/resources/bower_components/angular-google-maps/dist/angular-google-maps.min',
        'text': '/resources/bower_components/requirejs-text/text',
        'jquery': '/resources/bower_components/admin-lte/plugins/jQuery/jQuery-2.1.4.min',
        'bootstrap': '/resources/bower_components/admin-lte/bootstrap/js/bootstrap',
        'adminlte': '/resources/bower_components/admin-lte/dist/js/app',
        'config/ServerConfig': '/resources/js/config/ServerConfig'
    },
    shim: {
        'angular' : {
            'exports': 'angular'
        },
        'angular/angularRoute': ['angular'],
        'angular/angularMessages': {
            'deps': ['angular']
        },
        'angular/ngDialog': {
            'deps': ['angular'],
            'exports': 'ngDialog'
        },
        'angular/smart-table': {
            'deps': ['angular']
        },
        'angular/angular-flash-alert': {
            'deps': ['angular']
        },
        'angular/ng-tags-input': {
            'deps': ['angular']
        },
        'angular/ng-file-upload': {
            'deps': ['angular']
        },
        'angular/checklist-model': {
            'deps': ['angular']
        },
        'angular/simpleLogger': {
            'deps': ['angular']
        },
        'angular/googleMaps': {
            'deps': ['angular']
        },
        'adminlte': {
            'deps': ['jquery', 'bootstrap']
        },
        'bootstrap': {
            'deps': ['jquery']
        }
    }
});

define('app', function(require) {
    'use strict';

    //import admin template (bootstrap)
    require('jquery');
    require('bootstrap');
    require('adminlte');

    //angular modules
    require('angular');
    require('angular/angularRoute');
    require('angular/angularMessages');
    require('angular/ngDialog');
    require('angular/smart-table');
    require('angular/angular-flash-alert');
    require('angular/ng-file-upload');
    require('angular/checklist-model');

    //Google Map Modules
    require('async!http://maps.google.com/maps/api/js?libraries=places&sensor=false');
    require('lodash');
    require('angular/simpleLogger');
    require('angular/googleMaps');

    var app = angular.module('blueprint', ['ngRoute', 'ngMessages', 'ngDialog',
                                            'smart-table', 'flash', 'ngFileUpload', 'checklist-model', 'uiGmapgoogle-maps']);

    app.config(require('config/Routes'));
    app.config(require('config/Controllers'));
    app.config(require('config/Services'));
    app.config(require('config/Directives'));

    return app;

});

//start of application - main logic
require(['angular', 'app'], function(angular, app) {
        'use strict';

        angular.element(document).ready(function() {
            angular.bootstrap(document, ['blueprint']);
        });
    }
);