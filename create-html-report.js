const reporter = require('cucumber-html-reporter');
const version = require('./package.json').version

const options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version": version,
            "Test Environment": "LOCAL",
            "Browser": "Chrome 67.0.3396.99",
            "Platform": "Mac OS X 10.13.3",
            "Parallel": "Scenarios",
            "Executed": "Locally"
        }
    };

reporter.generate(options);
