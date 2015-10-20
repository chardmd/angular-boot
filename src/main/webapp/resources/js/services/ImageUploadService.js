define(['config/ServerConfig'], function(ServerConfig) {
    'use strict';

    var ImageUploadService = function($timeout, Upload) {

        var _this = this;

        _this.imageList = [];

        _this.uploadImage = function(file) {

            file.upload = Upload.upload({
                url: ServerConfig.URL_S3_FILEUPLOAD,
                data: {file: file},
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    console.log(file.result);

                    _this.imageList.push("Image URL Here..");
                });
            }, function (response) {
                if (response.status > 0) {
                    var errorMsg = response.status + ': ' + response.data;
                    console.log("error Message = " + errorMsg);
                }
            }, function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

        };

    };

    return ['$timeout', 'Upload', ImageUploadService];

});