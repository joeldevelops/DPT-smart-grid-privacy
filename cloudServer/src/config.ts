// Configuration via ENV variables for the application.
// See 12factor.net for more information.

const config = Object.freeze({
  port: process.env.PORT || 3000,
  fogNode: {
    host: process.env.FOG_NODE_HOST || 'localhost',
    port: process.env.FOG_NODE_PORT || 3001
  }
});

export default config;