"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeModel = void 0;
const mongoose_1 = require("mongoose");
const LikeSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    recipe_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Recipe"
    },
}, {
    timestamps: true,
});
const LikeModel = (0, mongoose_1.model)("Like", LikeSchema);
exports.LikeModel = LikeModel;
//# sourceMappingURL=likeSchema.js.map