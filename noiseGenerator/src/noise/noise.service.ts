// Here we generate a random number using Gaussian noise, with a variance of 1.
// This is a very simple way to generate random numbers, but it is not very random
// due to the inherent issues with builtin random generators in JS.
export const generateNoise = (): number => {
  const variance = 1;
  let rand1 = Math.random();
  rand1 = -2 * Math.log(rand1);

  let rand2 = Math.random();
  rand2 = 2 * Math.PI * rand2;
  return Math.sqrt(rand1 * variance) * Math.cos(rand2);
};