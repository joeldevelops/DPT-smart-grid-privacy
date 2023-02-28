// This file is responsible for fetching the energy usages from the fog node

import config from '../config';

import { UserUsage } from './energy.types';

// Fetches the energy usages from the fog node
export const getUsages = async (): Promise<UserUsage[]> => {
  const response = await fetch(
    `http://${config.fogNode.host}:${config.fogNode.port}/api/v1/usages`
  );
  const usages = await response.json();
  return usages;
}