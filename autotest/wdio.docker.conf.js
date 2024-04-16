import { config as baseConfig } from "./wdio.conf.js";

export const config = {
  ...baseConfig,
  hostname: "172.25.0.3",
  port: 4444,
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "firefox",
      acceptInsecureCerts: true,
      "moz:firefoxOptions": {
        args: ["--disable-gpu", "--disable-dev-shm-usage"],
      },
    },
  ],
  services: [],
};
