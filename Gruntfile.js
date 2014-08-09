module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/vendor/modernizr-2.6.2.min.js',  // Modernizr (from H5BP)
                    'js/*.js',                          // All JS in the js folder (from H5BP)
                    'js/vendor/jquery.fittext.js'       // FitText.js
                ],
                dest: 'js/build/production.js',
            }
        }

    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);
};