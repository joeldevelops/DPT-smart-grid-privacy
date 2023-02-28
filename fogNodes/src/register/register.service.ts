// This service handles the business logic and working with the database.

import Register from "./register.model";

export const register = async (body: any): Promise<any> => {
  const { userId, name, registeredDomain } = body;

  // First we check if the user is already registered
  const existingRegistration = await Register.findOne({
    where: {
      userId,
    },
  });

  // If they are, we return the existing registration
  if (existingRegistration) {
    return existingRegistration;
  }

  // Otherwise, we create a new registration
  const register = await Register.create({
    userId,
    name,
    registeredDomain,
  });

  return register; 
}