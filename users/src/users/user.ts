// This is the class for representing the user object and logic.
import { v4 as uuid } from "uuid";

import config from "../config";

import { Usage } from "./users.types";

const FOG_NODE_INTERVAL = 1000 * 30; // 30 seconds. This would be slower in real life.
const NOISE_GENERATOR_INTERVAL = 1000 * 15; // 15 seconds. This would be slower in real life.

const USER_DOMAIN = "energy-users.com";

export class User {
  id: string; // This is the unique ID for the user, a random uuidV4.
  name: string;

  // These are the intervals for calling the FogNode and NoiseGenerator services.
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

    // For this scheme we use the following format: 'user.{uuid}.region.energy-users.com'
    this.registeredDomain = `user.${uuid()}.region.${USER_DOMAIN}`;
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
  }

  public toJSON(): any {
    return {
      id: this.id,
      usage: this.usage,
      registeredDomain: this.registeredDomain,
    }
  }

  public stop() {
    clearInterval(this.fogNodeInterval);
    clearInterval(this.noiseGeneratorInterval);
  }

  private async registerWithFogNode(): Promise<void> {
    try {
      await fetch(
        `http://${config.fogNode.host}:${config.fogNode.port}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // This is required for CORS support to work
          },
          body: JSON.stringify({
            id: this.id,
          }),
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  private async getNoiseFromNoiseGenerator(): Promise<void> {
    try {
      const response = await fetch(
        `http://${config.noiseGenerator.host}:${config.noiseGenerator.port}/noise`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // This is required for CORS support to work
          },
        }
      );
      const noise = await response.json();
      this.usage.push(noise);
    } catch (error) {
      console.error(error);
    }
  }
}
