/* 
 * Entry point for the server
 * Users application made for the Data Protection Technology course
 */

import express from 'express';
import { json } from 'body-parser';

import config from './config';

import usersRouter from './users';

// IIFE, Immediately Invoked Function Expression to allow async/await
(async () => {
  const app = express();

  // Enables JSON-ified body parsing
  app.use(json());

  app.use('/api', usersRouter);

  app.listen(config.port, () => {
    console.log(`CloudServer listening on port ${config.port}`);
  });
})();