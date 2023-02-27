import { Router } from 'express';
import noiseV1 from './noise.router.v1';

const router = Router();

router.use('/v1/noise', noiseV1);

export default router;