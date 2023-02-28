import { Sequelize } from "sequelize";

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