define(['config/ServerConfig'], function (ServerConfig) {
    'use strict';

    var UserController = function ($scope, $filter, $location, restService, ngDialog, Flash, imageUploadService) {

        /**
         * SAVE A NEW RECORD
         */
        $scope.createRecord = function () {

            if ($scope.form.$valid) {

                ngDialog.openConfirm({

                    template: '<br/><p>Do you want to save this record?</p><br/>\
                                     <div class="ngdialog-buttons">\
                                     <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                                     <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm()">Yes</button>\
                                     </div>',
                    plain: true
                }).then(function (confirm) {

                    //API CALL
                    var url = ServerConfig.URL_SERVER + '/user/save';
                    var params = {
                        name: $scope.name,
                        address: $scope.address,
                        description: $scope.description,
                        storeId: $scope.store.storeId
                    };

                    console.log("UserController createRecord params = " + JSON.stringify(params));

                    restService.post(url, params,
                        function (data) {

                            var message = '<strong> Well done!</strong>  You have successfully saved the record.';
                            Flash.create('success', message, 'custom-class');

                            //clear form fields
                            $scope.resetForm();
                        },
                        function (response) {
                            console.log("error");
                        }
                    );

                }, function (close) {

                    console.log("Dialog close.");

                });

            }
        },

        //delete a record by passing an id
        $scope.deleteRecord = function (row) {

            ngDialog.openConfirm({

                template: '<br/><p>Do you want to delete this record?</p><br/>\
                                 <div class="ngdialog-buttons">\
                                 <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                                 <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm()">Yes</button>\
                                 </div>',
                plain: true
            }).then(function (confirm) {

                //API CALL
                var url = ServerConfig.URL_SERVER + '/user/delete';

                var params = {
                    id: row.userId
                };

                restService.delete(url, params,

                    function (data) {

                        //delete row
                        $scope.rowCollection.splice( $scope.rowCollection.indexOf(row), 1);

                        var message = '<strong> Great!</strong>  You have successfully deleted the record.';
                        Flash.create('success', message, 'custom-class');
                    },
                    function (response) {
                        console.log("error");
                    }
                );

            }, function (close) {

                console.log("Dialog close.");

            });
        },

        /**
         * GET RECORD BY PASSING ID - Use in Loading values in Update Form
         */
        $scope.getRecord = function () {

            var paramId = $location.search().id;

            //API CALL
            var url = ServerConfig.URL_SERVER + '/user/update';

            var params = {
                id: paramId
            };

            console.log("UserController getRecord params = " + JSON.stringify(params));

            restService.get(url, params,

                function (data) {

                    //Load Data here from the API
                    $scope.name = 'My Name';
                    $scope.address = "My Address";
                    $scope.description = "Description";
                    $scope.store =  {
                        storeId: 1,
                        storeName: "Cotton ON",
                        adddress: "Store Update"
                    };


                },
                function (response) {
                    console.log("error");
                }
            );
        };

        /**
         *  UPDATE A RECORD
         */
        $scope.updateRecord = function () {

            if ($scope.form.$valid) {

                ngDialog.openConfirm({

                    template: '<br/><p>Do you want to update this record?</p><br/>\
                                     <div class="ngdialog-buttons">\
                                     <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                                     <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm()">Yes</button>\
                                     </div>',
                    plain: true
                }).then(function (confirm) {

                    //API CALL
                    var url = ServerConfig.URL_SERVER + '/user/save';

                    var params = {
                        name: $scope.name,
                        address: $scope.address,
                        description: $scope.description,
                        storeId: $scope.store.storeId
                    };

                    console.log("UserController updateRecord params = " + JSON.stringify(params));

                    restService.post(url, params,
                        function (data) {

                            var message = '<strong> Well done!</strong>  You have successfully updated the record.';
                            Flash.create('info', message, 'custom-class');
                        },
                        function (response) {
                            console.log("error");
                        }
                    );

                }, function (close) {

                    console.log("Dialog close.");

                });

            }
        };

        $scope.resetForm = function () {

            //form fields only
            $scope.name = '';
            $scope.address = '';
            $scope.description = '';
            $scope.imageList = [];
            imageUploadService.imageList = [];

            $scope.formImage = '';

            //default - remove validation errors
            $scope.form.$setPristine();
            $scope.form.$setUntouched();
        },

        /**
         *
         * Functionalities for image upload
         */

        $scope.imageList = [];

        $scope.uploadImage = function(file) {

            imageUploadService.uploadImage(file);

            $scope.imageList = imageUploadService.imageList;
        };

        $scope.rowCollection = [

            { userId: 1, name: 'User 1', address: 'Boston', description: "Good" },
            { userId: 2, name: 'User 2', address: 'New York', description: "Great" },
            { userId: 3, name: 'User 3', address: 'California', description: "Best" }

        ];

        /**
         * Functionalities for stores to user
         */

        $scope.storeSearchList = [];

        $scope.searchStore = function() {

            ngDialog.open({
                template: '/resources/js/views/templates/store-search.html',
                scope: $scope
            });

        };

        $scope.storeCheck = function(value, checked) {

            var idx = $scope.storeSearchList.indexOf(value);
            if (idx >= 0 && !checked) {
                $scope.storeSearchList.splice(idx, 1);
            }
            if (idx < 0 && checked) {
                $scope.storeSearchList.push(value);
            }

            $scope.store = $scope.storeSearchList;
        };

        $scope.storeCollection = [

            {storeId: 1, storeName: 'Cotton ON', address: 'Bugis'},
            {storeId: 2, storeName: 'TopMan', address: 'HarbourFront'},
            {storeId: 3, storeName: 'HNM', address: 'Jurong East'}
        ];

    };

    return ['$scope', '$filter', '$location', 'restService', 'ngDialog', 'Flash', 'imageUploadService', UserController];

});