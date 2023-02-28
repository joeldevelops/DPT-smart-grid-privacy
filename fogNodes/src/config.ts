// Configuration via ENV variables for the application.
// See 12factor.net for more information.

const config = Object.freeze({
  runtimeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  baseUsers: process.env.BASE_USERS || 20,
  users: {
    port: process.env.USERS_PORT || 6000,
    host: process.env.USERS_HOST || 'localhost',
  },
});

export default config;