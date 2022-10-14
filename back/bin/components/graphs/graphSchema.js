"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphModel = void 0;
const mongoose_1 = require("mongoose");
const GraphSchema = new mongoose_1.Schema({
    data: { type: Object, required: true }
}, {
    timestamps: true,
});
const GraphModel = (0, mongoose_1.model)("Graph", GraphSchema);
exports.GraphModel = GraphModel;
//# sourceMappingURL=graphSchema.js.map