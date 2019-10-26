module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['src/**/*.js', 'test/**/*.js']
    }
  });
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('default', ['mochaTest', 'eslint']);
};
