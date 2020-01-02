var	Jasmine2HtmlReporter	=	require('protractor-jasmine2-html-reporter');
var	SpecReporter	=	require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config	=	{
  seleniumAddress:	'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  capabilities:	{
  'browserName':	'chrome',
  shardTestFiles:	true,
  maxInstances:	1

    },
    allScriptsTimeout: 300000,
    jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000,
    isVerbose: true,
    includeStackTrace: true,
    },
    specs:	['../specs/*.spec.js'],
		onPrepare:	function()	{
      jasmine.getEnv().addReporter(new SpecReporter({
                displayFailuresSummary: true,
                displayFailuredSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true
              }));
				jasmine.getEnv().addReporter(new	Jasmine2HtmlReporter({
						takeScreenshots:	true,
						fixedScreenshotName:	true
        }));

      //   jasmine.getEnv().addReporter(new HtmlReporter({
      //     baseDirectory: 'tmp/screenshots'
      //  }).getJasmine2Reporter());
     }
    

          };