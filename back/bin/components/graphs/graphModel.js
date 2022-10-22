"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const graphSchema_1 = require("./graphSchema");
class Graph {
    static async findAll() {
        return await graphSchema_1.GraphModel.find({});
    }
}
exports.Graph = Graph;
//# sourceMappingURL=graphModel.js.map