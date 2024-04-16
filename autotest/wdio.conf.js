export const config = {
  specs: ["./test/specs/**/*.js"],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chromium", // or 'chromium'
      "goog:chromeOptions": {
        args: ["--no-sandbox", "headless", "disable-gpu"],
      },
    },
  ],

  logLevel: "warn",
  // outputDir: "./logs",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
