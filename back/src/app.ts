import cors from "cors";
import express from 'express';
import mongoose from "mongoose";
import { db } from './db';
import Logging from './lib/Logging';
import { userAuthRouter } from "./components/users/userRouter";

const router = express();

/** Connect to Mongo */
mongoose
  .connect(db.mongo.url, { retryWrites: true, w: 'majority'})
  .then(() => {
    Logging.info('Connected to MongoDB!!');
    StartServer();
  })
  .catch((err) => {
    Logging.error('Unable to connect: ');
    Logging.error(err);
  });

/** Only start the server if Mongo Connects */

const StartServer = () => {
  router.use((req, res, next) => {
    /** Log the Request */
    Logging.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
      /** Log the Response */
      Logging.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: ${res.status}`);
    });

    next();
  });

  router.use(cors())
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  /**Routes */
  router.get("/", (req, res) => {
    res.send("하루한끼 서비스 API 입니다.");
  });

  router.use(userAuthRouter);

  /** Error handling */
  router.use((req, res, next)=> {
    const error = new Error('not found');
    Logging.error(error);

    return res.status(404).json({ message: error.message });
  });

  router.listen(db.server.port, () => Logging.info(`Server is running on port ${db.server.port}`));
};