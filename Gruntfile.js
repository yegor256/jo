module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', ['mochaTest']);
};
