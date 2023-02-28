// Database connection initialization

import { Sequelize } from "sequelize";

// Need to use standard require here because of the way the config must be in JS and not TS
const pgConfig = require("./config");
import config from "../config";
const dbConfig = pgConfig[config.runtimeEnv];

let sequelize;
if (dbConfig?.url) {
  sequelize = new Sequelize(dbConfig.url, dbConfig);
} else {
  sequelize = new Sequelize(dbConfig);
}

export default sequelize;