import { Graph } from "./graphModel";

class graphService {
  static async getGraphs() {
    return await Graph.findAll();
  }
}

export { graphService };
