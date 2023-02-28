// This service file is responsible for creating and maintaining the list of "existing" users.
// It responds to requests from the FogNodes to get the list of users and their usage data.

import { User } from "./user";

import config from "../config";

const users: User[] = [];

// IIFE
(() => {
  // Create 'config.baseUsers' users on startup
  for (let i = 0; i < config.baseUsers; i++) {
    const user = new User();
    user.initialize();
    users.push(user);
  }
})();

// This will be cleaned up on shutdown
setInterval(() => {
  const user = new User();
  user.initialize();
  users.push(user);
}, 1000 * 5); // new user every 5 seconds

export function getUsers(): User[] {
  return users;
}

