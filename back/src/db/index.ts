import Logging from "../lib/Logging";
import mongoose from "mongoose";

export default async (dbUrl: string) => {
    mongoose
      .connect(dbUrl, { retryWrites: true, w: "majority" })
      .then(() => {
        Logging.info("Connected to MongoDB!!");
      })
      .catch((err) => {
        Logging.error("Unable to connect: ");
        Logging.error(err);
      });
  };
  