module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: {
          separator: '\n\n//--------------------------------\n\n',
        },
        dist: {
          src: ['dev_js/jquery.bootstrap-responsive-tabs.min.js', 'dev_js/changeHiddenFields.js', 'dev_js/honeypot.js', 'dev_js/showHide.js', 'dev_js/urlStringUtility.js', 'dev_js/changeInterest.js', 'dev_js/formProcess.js'],
          dest: 'js/infosession_app.js',
        },
      },
      uglify: {
        my_target: {
          files: {
            'js/infosession_app.min.js': ['js/infosession_app.js']
          }
        }
      }
      
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};