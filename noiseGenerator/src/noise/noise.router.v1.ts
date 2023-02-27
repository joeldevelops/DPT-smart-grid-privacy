// Router file, in MVC this would be the controller

import { Router } from 'express';

import * as noiseService from './noise.service';

const router = Router();

// GET /api/v1/noise
// Returns a random noise value following a Gaussian distribution
router.get('/', (req, res) => {
  try {
    const noise = noiseService.generateNoise();
    res.json(noise);
  } catch (err) {
    res.status(500).send('Unable to retrieve noise at this time');
  }
});

export default router;