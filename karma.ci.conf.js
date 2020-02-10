const baseKarmaConfig = require('./karma.conf');

module.exports = function(config) {
  baseKarmaConfig(config);

  config.set({
    colors: false,
    autoWatch: false,
    reporters: ['progress'],
    browsers: ['ChromeCI'],
    singleRun: true,
    logLevel: config.LOG_WARN
  });
};
