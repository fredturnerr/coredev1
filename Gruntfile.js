module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: "./bin/www"
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'public/css',
          importPath: ['public/vendor/foundation/scss/']
        }
      }
    },

    watch: {
      compass: {
        files: 'sass/*.scss',
        tasks: ['compass:dev'],
      }
    }
    
  });


  // Default task(s).
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  grunt.registerTask('sass', ['watch:compass']);
  grunt.registerTask('default', ['nodemon']);


};