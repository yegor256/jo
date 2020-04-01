module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['coverage'],
    karma: {
      unit: {
        basePath: '.',
        options: {
          files: ['test/**/*.js', 'src/**/*.js'],
        },
        preprocessors: {
          'src/**/*.js': ['coverage']
        },
        plugins: [
          'karma-mocha',
          'karma-chai',
          'karma-coverage',
          'karma-firefox-launcher',
          'karma-mocha-reporter'
        ],
        coverageReporter: {
          type: 'html',
          dir: 'coverage/',
          subdir: function(browser) {
            return browser.toLowerCase().split(/[ /-]/)[0];
          },
          check: {
            global: {
              lines: 60,
              statements: 70,
              functions: 100,
              branches: 50
            }
          },
        },
        frameworks: ['mocha', 'chai'],
        reporters: ['progress', 'mocha', 'coverage'],
        singleRun: true,
        port: grunt.option('port') || 9876,
        colors: !grunt.option('monochrome'),
        logLevel: 'INFO',
        browsers: ['FirefoxHeadless'],
        autoWatch: false
      }
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
