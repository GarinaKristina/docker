export const config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  exclude: [],

  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--no-sandbox', '--disable-infobars', '--headless', '--disable-gpu', '--window-size=1440,735'],
      },
    },
  ],

  logLevel: 'info',

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

