import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  db_url: process.env.DATABASE_URL,
};

export default dbConfig;
