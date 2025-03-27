// SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
// SPDX-License-Identifier: MIT

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['coverage'],
    karma: {
      unit: {
        options: {
          files: ['test/**/*.js', 'src/**/*.js'],
        },
        files: [
          {
            pattern: 'fixtures/**/*.html',
          },
        ],
        preprocessors: {
          'src/**/*.js': ['coverage'],
          'fixtures/**/*.html': ['html2js'],
        },
        plugins: [
          'karma-assert',
          'karma-mocha',
          'karma-fixture',
          'karma-coverage',
          'karma-html2js-preprocessor',
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
              functions: 90,
            },
          },
        },
        frameworks: ['assert', 'mocha', 'fixture'],
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
