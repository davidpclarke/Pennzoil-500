module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {                                             // Task
            dist: {                                         // Target
                options: {                                  // Target options
                    style: 'expanded'
                },
                files: {                                    // Dictionary of files
                    'css/main.css': 'css/scss/main.scss'    // 'destination': 'source'
                }
            }
        },

        concat: {   
            dist: {
                src: [
                    'js/vendor/modernizr-2.6.2.min.js', // Modernizr (from H5BP)
                    'js/*.js',                          // All JS in the js folder (from H5BP)
                    'js/vendor/jquery.fittext.js'       // FitText.js
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};