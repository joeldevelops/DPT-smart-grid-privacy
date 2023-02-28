/* 
 * Entry point for the server
 * FogNodes application made for the Data Protection Technology course
 */

import express from 'express';
import { json } from 'body-parser';

import config from './config';

import registerRouter from './register';

// IIFE, Immediately Invoked Function Expression to allow async/await
(async () => {
  const app = express();

  // Enables JSON-ified body parsing
  app.use(json());

  app.use('/api', registerRouter);

  app.listen(config.port, () => {
    console.log(`CloudServer listening on port ${config.port}`);
  });
})();