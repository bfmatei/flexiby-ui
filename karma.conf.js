const angularKarmaPlugin = require('@angular-devkit/build-angular/plugins/karma');
const karmaChromeLauncher = require('karma-chrome-launcher');
const karmaCoverageIstanbulReporter = require('karma-coverage-istanbul-reporter');
const karmaJasmine = require('karma-jasmine');
const karmaJasmineHtmlReporter = require('karma-jasmine-html-reporter');
const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverageIstanbulReporter,
      angularKarmaPlugin
    ],
    client: {
      clearContext: false,
      jasmine: {
        random: false
      }
    },
    coverageIstanbulReporter: {
      dir: path.join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-web-security',
          '--no-proxy-server',
          '--disable-translate',
          '--disable-extensions',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--window-size=1920,1080',
          '--remote-debugging-port=9222'
        ]
      }
    },
    singleRun: false,
    reportSlowerThan: 500,
    hostname: '127.0.0.1',
    captureTimeout: 60000,
    browserDisconnectTimeout: 60000,
    browserNoActivityTimeout: 60000,
    processKillTimeout: 60000
  });
};
