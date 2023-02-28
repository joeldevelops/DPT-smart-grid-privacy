// Re-export the router with a 'v1' prefix

import { Router } from "express";
import usageV1 from "./usage.router.v1";

const router = Router();

router.use("/v1/usages", usageV1);

export default router;