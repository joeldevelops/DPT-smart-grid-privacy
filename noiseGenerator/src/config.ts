// Configuration via ENV variables for the application.
// See 12factor.net for more information.

export const config = Object.freeze({
  port: process.env.PORT || 3000,
});