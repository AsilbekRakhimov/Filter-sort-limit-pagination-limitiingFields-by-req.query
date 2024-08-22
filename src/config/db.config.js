import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  db_url: process.env.database_url,
};

export default dbConfig;
