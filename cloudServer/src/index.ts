/* 
 * Entry point for the server
 * Cloud Server application made for the Data Protection Technology course
 */

import express from 'express';
import { json } from 'body-parser';

import config from './config';

import energyRouter from './energy';

// IIFE, Immediately Invoked Function Expression to allow async/await
(async () => {

  const app = express();

  app.use(json());

  app.use('/api', energyRouter);

  app.listen(config.port, () => {
    console.log(`CloudServer listening on port ${config.port}`);
  });
})();