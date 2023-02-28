/* 
 * Entry point for the server
 * Noise Generator application made for the Data Protection Technology course
 */

import express from 'express';
import { json } from 'body-parser';

import config from './config';

import noiseRouter from './noise';

// IIFE, Immediately Invoked Function Expression to allow async/await
(async () => {

  const app = express();

  app.use(json());

  app.use('/api', noiseRouter);

  app.listen(config.port, () => {
    console.log(`NoiseGenerator listening on port ${config.port}`);
  });
})();