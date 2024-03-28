export const config = {
  specs: ["./test/specs/**/*.js"],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
    },
  ],

  logLevel: "warn",

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
