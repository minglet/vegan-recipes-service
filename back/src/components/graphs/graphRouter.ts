import { Router } from "express";
import { graphService } from "./graphService";

const graphRouter = Router();

/** Get all data for graph */
graphRouter.get("/graphs", async (req, res, next) => {
  try {
    res.status(200).json(await graphService.getGraphs());
  } catch(err) {
      next(err);
  }
})

export { graphRouter };
