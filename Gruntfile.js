// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

    grunt.initConfig({

        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src/main/resources/static/js',
                    mainConfigFile: 'src/main/resources/static/js/app.js',
                    name: 'app',
                    optimize: 'none',
                    out: 'src/main/resources/static/out/build.js'
                }
            }
        }

    });

    // This loads the plugin into grunt
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ["requirejs"]);

};
