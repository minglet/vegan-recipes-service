import { Graph } from "./graphModel";

/** Get all data */
class graphService {
  static async getGraphs() {
    return await Graph.findAll();
  }
}

export { graphService };
