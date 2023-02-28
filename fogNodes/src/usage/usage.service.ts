// This service is responsible for fetching the energy usages from the users who have 
// registered with the fog nodes
import axios from 'axios';

import config from '../config';

import { UserUsage } from './usage.types';

// In real life, we would reach out to the users individually using their registered domain
// and fetch their usages. For the sake of this project, we will just fetch all the usages
// from the users service via a single endpoint.
export const getUserUsages = async (): Promise<UserUsage[]> => {
  const response = await axios.get(
    `http://${config.users.host}:${config.users.port}/api/v1/users`
  );
  return response.data;
}

// Fetches the energy usage from a single user. This is not used in this project, but
// can be used by an evaluator to fetch the energy usage from a single user.
export const getUserUsage = async (userId: string): Promise<UserUsage> => {
  const response = await axios.get(
    `http://${config.users.host}:${config.users.port}/api/v1/users/${userId}`
  );
  return response.data;
}