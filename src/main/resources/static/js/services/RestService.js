define(function() {
   'use strict';

    var RestService = function($http) {

        var _this = this;

        //get
        _this.get = function(url, params, returnSuccess, returnError) {

            var strParam = [];

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    strParam.push(key + '=' + encodeURIComponent(params[key]));
                }
            }

            if (strParam.length > 0) {
                url += '?' + strParam.join('&');
            }

            $http.get(url, params).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService GET:: " + url);
        };

        //post
        _this.post = function(url, params, returnSuccess, returnError) {

            $http.post(url, params).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService POST:: " + url);

        };

        //patch
        _this.patch = function(url, params, returnSuccess, returnError) {

            $http.patch(url, params).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService PATCH:: " + url);

        };

        //delete
        _this.delete = function(url, params, returnSuccess, returnError) {

            var strParam = [];

            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    strParam.push(key + '=' + encodeURIComponent(params[key]));
                }
            }

            if (strParam.length > 0) {
                url += '?' + strParam.join('&');
            }

            $http.delete(url).
                success(function(data, status, headers, config) {
                    returnSuccess(data, status, headers, config);
                }).
                error(function(data, status, headers, config) {
                    returnError(data, status, headers, config);
                });

            console.log("RestService DELETE:: " + url);

        };

    };

    return ['$http', RestService];

});