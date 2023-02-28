// This service handles the business logic and working with the database.

import Register from "./register.model";

export const register = async (body: any): Promise<number> => {
  const { userId, name, registeredDomain } = body;

  // Upsert will either create a new row or update an existing row
  const register = await Register.upsert({
    userId,
    name,
    registeredDomain,
  },
  {
    returning: true, // This enables something to return on an update
  });

  return register[1][0].dataValues; 
}