const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

require('nightwatch-cucumber')({
  cucumberArgs: [ '--require-module', 'babel-core/register'
                , '--require-module', 'babel-polyfill'
                , '--require', 'features/step_definitions'
                , '--format', 'json:reports/cucumber.json'
                , 'features'
                ]
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page-objects',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8080',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots/default'
      },
      globals: {
        waitForConditionTimeout: 30000,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
};
