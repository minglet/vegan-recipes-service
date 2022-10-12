import { Graph } from "./graphModel";

class graphService {
  static async getGraphs() {
    const graphs = await Graph.findAll();
    return graphs;
  }
}

export { graphService };
