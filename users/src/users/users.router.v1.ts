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
    const usersJSON = users.map(user => user.toJSON());
    res.json(usersJSON);
  }
  catch (err) {
    console.error(err)
    res.status(500).send("Unable to retrieve users at this time");
  }
});

// GET /api/v1/users/:userId
// Returns a single user's energy usage data
router.get("/:userId", async (req, res) => {
  console.log(`Getting user with ID: ${req.params.userId}...`)
  try {
    const user = await usersService.getUser(req.params.userId);
    res.json(user.toJSON());
  }
  catch (err) {
    console.error(err)
    res.status(500).send("Unable to retrieve user at this time");
  }
});

export default router;