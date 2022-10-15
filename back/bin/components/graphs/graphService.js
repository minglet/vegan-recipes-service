"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphService = void 0;
const graphModel_1 = require("./graphModel");
class graphService {
    static async getGraphs() {
        const graphs = await graphModel_1.Graph.findAll();
        return graphs;
    }
}
exports.graphService = graphService;
//# sourceMappingURL=graphService.js.map