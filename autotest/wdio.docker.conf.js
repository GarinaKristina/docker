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
      // "goog:chromeOptions": {
      //   args: ["--disable-gpu", "--headless"],
      // },
    },
  ],
  services: ["docker"],
};
