import dotenv from "dotenv";

dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

export const MONGODB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/`;
export const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1337;
