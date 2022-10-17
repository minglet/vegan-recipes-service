"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const graphSchema_1 = require("./graphSchema");
class Graph {
    static async findAll() {
        const charts = await graphSchema_1.GraphModel.find({});
        return charts;
    }
}
exports.Graph = Graph;
//# sourceMappingURL=graphModel.js.map