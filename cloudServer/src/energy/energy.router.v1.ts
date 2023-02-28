// Router file, in MVC this would be the controller

import { Router } from "express";

import * as energyService from "./energy.service";

const router = Router();

// GET /api/v1/energy/usages
// Returns the energy usages from the fog node for all users that have registered
router.get("/usages", async (req, res) => {
  try {
    console.log("Getting usages from fog node...")
    const usages = await energyService.getUsages();
    res.json(usages);
    console.log("Usages returned from fog node.")
  }
  catch (err) {
    console.error(err)
    res.status(500).send("Unable to retrieve usages at this time");
  }
});

export default router;