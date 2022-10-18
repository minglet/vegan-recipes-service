import { GraphModel } from "./graphSchema";

export class Graph {
  static async findAll() {
    return await GraphModel.find({});
  }
}

