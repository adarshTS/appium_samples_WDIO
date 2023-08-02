exports.config = {
    user: process.env.BROWSERSTACK_USERNAME, 
    key: process.env.BROWSERSTACK_ACCESS_KEY,    
    hostname: 'hub.browserstack.com',
    reporters: [
        ['junit', {
            outputDir: './results',
            outputFileFormat: function() {
                return `test-results.xml`
            }
        }]
    ],
    services: [
      [
        'browserstack',
        {
          app: 'bs://30c7440808d76bebf3f2d3b02b539a4015c87788',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: false
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack WDIO Sample",
        buildName: "bstack-wdio-demo",
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 10,
    specs: [
        'test/specs/**/*.js'
       
    ],
}