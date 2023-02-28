// Configuration via ENV variables for the application.
// See 12factor.net for more information.

const config = Object.freeze({
  port: process.env.PORT || 3002,
  baseUsers: process.env.BASE_USERS || 20,
  fogNode: {
    port: process.env.FOG_NODE_PORT || 3003,
    host: process.env.FOG_NODE_HOST || 'localhost',
  },
  noiseGenerator: {
    port: process.env.NOISE_GENERATOR_PORT || 3001,
    host: process.env.NOISE_GENERATOR_HOST || 'localhost',
  },
});

export default config;