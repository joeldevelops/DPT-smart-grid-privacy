// Re-export the router with a 'v1' prefix

import { Router } from "express";
import usersV1 from "./users.router.v1";

const router = Router();

router.use("/v1/users", usersV1);

export default router;