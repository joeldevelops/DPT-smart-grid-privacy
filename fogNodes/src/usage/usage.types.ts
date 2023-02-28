// This file contains the types used by the usage module

// Usage type, represents a 'period' of energy usage
export type Usage = {
  id: number;
  timestamp: string;
  value: number;
};

// UserUsage type, represents a user's energy usage
// Can be any amount of usage from the time since past collection to the beginning of time.
export type UserUsage = {
  id: number;
  usages: Usage[];
};