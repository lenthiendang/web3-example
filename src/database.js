import knex from "knex";
import dotenv from "dotenv";

dotenv.config("../.env");

const db = knex({
  client: "pg",
  connection: {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});

export default db;
