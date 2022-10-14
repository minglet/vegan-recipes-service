import { GraphModel } from "./graphSchema";

class Graph {
  static async findAll() {
    const charts = await GraphModel.find({});
    return charts;
  }
}

export { Graph };
