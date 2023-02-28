// Router file, in MVC this would be the controller

import { Router } from "express";

import * as usersService from "./users.service";

const router = Router();

// GET /api/v1/users
// Returns all users' energy usage data
router.get("/", async (req, res) => {
  console.log("Getting users from users service...")
  try {
    const users = await usersService.getUsers();
    res.json(users);
  }
  catch (err) {
    console.error(err)
    res.status(500).send("Unable to retrieve users at this time");
  }
});

export default router;