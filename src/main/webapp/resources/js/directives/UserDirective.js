define(function() {
    'use strict';

    var UserDirective = function($timeout) {

        return {

            link: function(scope, element, attrs) {

                var activateChildElement = function() {

                    console.log("Dom Manipulation here.. (User directive)");
                }

                $timeout(activateChildElement, 0);
            }
        }

    };

    return ['$timeout', UserDirective];

});