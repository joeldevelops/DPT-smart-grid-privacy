// Configuration file to be able to connect to the database

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "localhost",
    url: process.env.DATABASE_URL || "",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "localhost",
    url: process.env.DATABASE_URL || "",
    dialect: "postgres",
  },
};