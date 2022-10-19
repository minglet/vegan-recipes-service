"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const LikeSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        ref: "User",
    },
    recipeId: {
        type: String,
        ref: "Recipe",
    }
});
const UserModel = (0, mongoose_1.model)("Like", LikeSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=likeSchma.js.map