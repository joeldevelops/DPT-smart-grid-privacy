// Re-export the router with a 'v1' prefix

import { Router } from "express";
import energyV1 from "./energy.router.v1";

const router = Router();

router.use("/v1/energy", energyV1);

export default router;