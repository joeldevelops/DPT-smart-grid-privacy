// Router file, in MVC this would be the controller

import { Router } from "express";

import * as energyService from "./energy.service";

const router = Router();

router.get("/usages", async (req, res) => {
  try {
    const usages = await energyService.getUsages();
    res.json(usages);
  }
  catch (err) {
    res.status(500).send("Unable to retrieve usages at this time");
  }
});

export default router;