// This service is responsible for fetching the energy usages from the users who have 
// registered with the fog nodes

import config from '../config';

import { UserUsage } from './usage.types';

// In real life, we would reach out to the users individually using their registered domain
// and fetch their usages. For the sake of this project, we will just fetch all the usages
// from the users service via a single endpoint.
export const getUserUsages = async (): Promise<UserUsage[]> => {
  const response = await fetch(`${config.users.host}:${config.users.port}/api/v1/users`);
  const usages = await response.json();
  return usages;
}