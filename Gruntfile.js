module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['coverage'],
    karma: {
      unit: {
        options: {
          files: ['test/**/*.js', 'src/**/*.js'],
        },
        preprocessors: {
          'src/**/*.js': ['coverage'],
        },
        plugins: [
          'karma-assert',
          'karma-mocha',
          'karma-coverage',
          'karma-firefox-launcher',
          'karma-mocha-reporter',
        ],
        coverageReporter: {
          subdir: function(browser) {
            return browser.toLowerCase().split(/[ /-]/)[0];
          },
          check: {
            global: {
              branches: 50,
              lines: 60,
              statements: 70,
              functions: 100,
            },
          },
        },
        frameworks: ['assert', 'mocha'],
        reporters: ['progress', 'mocha', 'coverage'],
        singleRun: true,
        port: grunt.option('port') || 9876,
        colors: !grunt.option('monochrome'),
        browsers: ['FirefoxHeadless'],
      },
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json',
      },
      target: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    },
  });
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default', ['karma', 'eslint']);
};
