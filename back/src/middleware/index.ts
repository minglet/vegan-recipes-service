import errorHandler from "./errorHandler.middleware";
import express from 'express';
import { Express } from "express";
import cors from "cors";
import Logging from "../lib/Logging";
import bodyParser from "body-parser";
import { userAuthRouter } from "../components/users/userRouter";
import { recipeRouter } from "../components/recipes/recipeRouter";
import { graphRouter } from "../components/graphs/graphRouter";

export class MiddleWare {
  constructor(App: Express) {
    App.use(
      cors({
        origin: "*",
        credentials: false,
      }),
    );
    App.use(bodyParser.json());
    App.use((req, res, next) => {
      /** Log the Request */
      Logging.info(
        `Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`,
      );

      res.on("finish", () => {
        /** Log the Response */
        Logging.info(
          `Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: ${res.status}`,
        );
      });

      next();
    });

    App.use(express.urlencoded({ extended: true }));
    App.use(express.json());

    /**Routes */
    App.get("/", (req, res) => {
      res.send("하루한끼 서비스 API 입니다.");
    });

    App.use(userAuthRouter);
    App.use(recipeRouter);
    App.use(graphRouter);

    /** Error handling */
    App.use(errorHandler);

  }
}
