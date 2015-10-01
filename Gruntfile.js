module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {                                             // Task
            dist: {                                         // Target
                files: {                                    // Dictionary of files
                    'css/main.css': 'css/scss/main.scss'    // 'destination': 'source'
                }
            }
        },

        concat: {   
            dist: {
                src: [
                    'js/*.js',                          // All JS in the js folder (from H5BP)
                    'bower_components/fittext/fittext.js'       // FitText.js
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        // Watch Configuration
        watch: {
            files: "css/scss/*",
            tasks: [ "sass" ],

            options: {
                livereload: true
            }

        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks( "grunt-contrib-watch" );

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};