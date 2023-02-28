// This is the class for representing the user object and logic.
import { v4 as uuid } from "uuid";
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

import config from "../config";

import { Usage } from "./users.types";

const USAGE_INTERVAL = 1000 * 5; // 5 seconds. This would be slower in real life.
const FOG_NODE_INTERVAL = 1000 * 30; // 30 seconds. This would be slower in real life.
const NOISE_GENERATOR_INTERVAL = 1000 * 15; // 15 seconds. This would be slower in real life.

const USER_DOMAIN = "energy-users.com";
const ENERGY_USE_MAX = 1000; // This is the maximum amount of energy a user can use in a single interval.

const generatorConfig: Config = {
  dictionaries: [names],
};

export class User {
  id: string; // This is the unique ID for the user, a random uuidV4.
  name: string;

  // These are the intervals for calling the FogNode and NoiseGenerator services.
  private energyUseInterval: NodeJS.Timeout;
  private fogNodeInterval: NodeJS.Timeout;
  private noiseGeneratorInterval: NodeJS.Timeout;

  // This is the list of usage data for the user.
  private usage: Usage[];

  // This is the domain that the user is registered under. When the user comes online, 
  // the domain is registered with a DNS server so that if it goes offline, 
  // the IP can be changed without losing the user's smart meter.
  private registeredDomain: string;

  constructor() {
    this.id = uuid();
    this.usage = [];
    this.name = uniqueNamesGenerator(generatorConfig);

    // For this scheme we use the following format: 'user.{uuid}.region.energy-users.com'
    this.registeredDomain = `user.${uuid()}.region.${USER_DOMAIN}`;
    console.log(`User ${this.name} created with domain ${this.registeredDomain}`);
  }

  // This is the method for initializing the user object.
  // To do this, we need to call the FogNode service to register ourselves, which we do on an interval.
  // We also need to call the NoiseGenerator service, which we do on an interval.
  public initialize() {
    this.registerWithFogNode.bind(this);
    this.fogNodeInterval = setInterval(
      () => this.registerWithFogNode(),
      FOG_NODE_INTERVAL
    );

    this.getNoiseFromNoiseGenerator.bind(this);
    this.noiseGeneratorInterval = setInterval(
      () => this.getNoiseFromNoiseGenerator(),
      NOISE_GENERATOR_INTERVAL
    );

    this.useEnergy.bind(this);
    this.energyUseInterval = setInterval(() => this.useEnergy(), USAGE_INTERVAL);
  }

  // This is the method for serializing the user object.
  public toJSON(): any {
    return {
      id: this.id,
      usage: this.usage,
      registeredDomain: this.registeredDomain,
    }
  }

  // Not called, but here for completeness.
  public stop() {
    clearInterval(this.fogNodeInterval);
    clearInterval(this.noiseGeneratorInterval);
    clearInterval(this.energyUseInterval);
  }

  // This function generates a random amount of energy usage for the user.
  // In real life, this would be a smart meter reading.
  // We call this on a timer.
  private useEnergy(): void {
    this.usage.push({
      timestamp: new Date().toISOString(),
      value: Math.random() * ENERGY_USE_MAX
    });
  }

  // Registers with the fog node so that the node 'knows' about the user.
  private async registerWithFogNode(): Promise<void> {
    try {
      await fetch(
        `http://${config.fogNode.host}:${config.fogNode.port}/api/v1/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // This is required for CORS support to work
          },
          body: JSON.stringify({
            userId: this.id,
            registeredDomain: this.registeredDomain,
            name: this.name,
          }),
        }
      );
      console.log(`User ${this.name} (re)registered with FogNode`);
    } catch (error) {
      console.error(error);
    }
  }

  // Gets the noise from the noise generator and adds it to local storage.
  // Which is just an array in this case.
  private async getNoiseFromNoiseGenerator(): Promise<void> {
    try {
      const response = await fetch(
        `http://${config.noiseGenerator.host}:${config.noiseGenerator.port}/api/v1/noise`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // This is required for CORS support to work
          },
        }
      );
      const noise = await response.json();
      this.usage.push({
        timestamp: new Date().toISOString(),
        value: noise
      });
      console.log(`User ${this.name} got noise: ${noise} from the generator`)
    } catch (error) {
      console.error(error);
    }
  }
}
