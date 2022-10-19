"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModel = void 0;
const mongoose_1 = require("mongoose");
const RecipeSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    preparation: {
        type: String,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    cluster_label: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
const RecipeModel = (0, mongoose_1.model)("Recipe", RecipeSchema);
exports.RecipeModel = RecipeModel;
//# sourceMappingURL=recipeSchema.js.map