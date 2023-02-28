// Router file, in MVC this would be the controller

import { Router } from 'express';

import * as registerService from './register.service';

const router = Router();

// POST /api/v1/register
// Registers a new user, so that they can be contacted later.
// Operation is idempotent, so if the user already exists, the existing id is returned.
router.post('/', async (req, res) => {
  try {
    const id = await registerService.register(req.body);
    res.json({ id });
  } catch (err) {
    res.status(500).send('Unable to register user at this time');
  }
});

export default router;