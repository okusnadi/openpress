module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      allFiles: [
        'Gruntfile.js',
        'src/*.js',
        'src/**/*.js'
      ],
      individualFiles: {
        files: [{
          src: 'Gruntfile.js'
        }, {
          src: 'src/*.jss'
        }, {
          src: 'src/**/*.js'
        }]
      },
      options: {
        jshintrc: '.jshintrc',
        reporterOutput: ""
      }
    },
    babel: {
      options: {
        comments: true,
        sourceMap: false,
        presets: ['latest']
      },
      dist: {
        files: {
          "dist/index.js": "src/index.js"
        }
      }
    },
    watch: {
      files: ['**/*'],
      tasks: ['build']
    }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "babel" task.
  grunt.loadNpmTasks('grunt-babel');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['build', 'watch']);

  grunt.registerTask('build', ['babel', 'jshint']);

};
