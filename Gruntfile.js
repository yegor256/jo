module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    },
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          timeout: 20000,
          'report-formats': 'html',
          print: 'summary',
          check: {
            lines: 60,
            statements: 70,
            functions: 100,
            branches: 50
          }
        }
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
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.registerTask('default', ['mocha_istanbul', 'eslint']);
};
