import { config as baseConfig } from "./wdio.conf.js";

export const config = {
  ...baseConfig,
  hostname: "localhost",
  port: 4444,

  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--no-sandbox", "--disable-infobars", "--headless", "--disable-gpu", "--window-size=1440,735"],
      },
    },
  ],
  services: ["docker"],
};
