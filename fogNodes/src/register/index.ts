// Re-export the router with a 'v1' prefix

import { Router } from "express";
import registerV1 from "./register.router.v1";

const router = Router();

router.use("/v1/register", registerV1);

export default router;