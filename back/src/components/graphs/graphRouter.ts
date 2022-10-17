import { Router } from "express";
import { graphService } from "./graphService";

const graphRouter = Router();

graphRouter.get("/graphs", async (req, res, next) => {
  try {
    const graphs = await graphService.getGraphs();
    res.status(200).json(graphs);
  } catch(err) {
      next(err);
  }
})

export { graphRouter };
