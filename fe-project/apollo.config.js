const sharedConfig = require("config/apollo.config");

module.exports = {
  ...sharedConfig,
  client: {
    ...sharedConfig.client,
    includes: ["components/**/*.{js,jsx,ts,tsx,graphql}"],
  },
};
