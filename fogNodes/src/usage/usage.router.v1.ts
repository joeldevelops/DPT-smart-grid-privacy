// Router for usage module

import { Router } from "express";

import * as usageService from "./usage.service";

const router = Router();

// GET /api/v1/usages
// Returns all fog nodes' energy usage data
router.get("/", async (req, res) => {
  console.log("Getting usages from users...")
  try {
    const usages = await usageService.getUserUsages();
    res.json(usages);
  } catch (err) {
    console.error(err);
    res.status(500).send("Unable to retrieve usages at this time");
  }
});

export default router;