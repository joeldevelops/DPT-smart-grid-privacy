// Configuration via ENV variables for the application.
// See 12factor.net for more information.

const config = Object.freeze({
  port: process.env.PORT || 3000,
});

export default config;