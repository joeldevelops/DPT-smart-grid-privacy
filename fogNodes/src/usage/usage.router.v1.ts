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

// GET /api/v1/usages/:userId
// Returns a single user's energy usage data
router.get("/:userId", async (req, res) => {
  console.log(`Getting usage from user with ID: ${req.params.userId}...`)
  try {
    const usage = await usageService.getUserUsage(req.params.userId);
    res.json(usage);
  } catch (err) {
    console.error(err);
    res.status(500).send("Unable to retrieve usage at this time");
  }
});

export default router;