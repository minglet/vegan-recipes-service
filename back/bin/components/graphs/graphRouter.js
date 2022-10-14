"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphRouter = void 0;
const express_1 = require("express");
const graphService_1 = require("./graphService");
const graphRouter = (0, express_1.Router)();
exports.graphRouter = graphRouter;
graphRouter.get("/graphs", async (req, res, next) => {
    try {
        const graphs = await graphService_1.graphService.getGraphs();
        res.status(200).json(graphs);
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=graphRouter.js.map