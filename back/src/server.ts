import { App } from "./app";
import { SERVER_PORT, MONGODB_URL } from "./config/config";
import db from "./db";
import http from "http";
import Logging from "./lib/Logging";

const app = new App();

const serverHandler = () => {
  Logging.info(`서버 가동 ON PORT: ${SERVER_PORT}`)
};

// console.log(SERVER_PORT);

http.createServer(app.getApp()).listen(SERVER_PORT, async () => {
  await db(MONGODB_URL);
  serverHandler();
});
