"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const recipeSchema_1 = require("./recipeSchema");
class Recipe {
    static async findById({ recipe_id }) {
        return await recipeSchema_1.RecipeModel.findOne({ _id: recipe_id });
    }
    static async findAll() {
        return await recipeSchema_1.RecipeModel.find({});
    }
    static async findByClusterNum({ cluster_num }) {
        return await recipeSchema_1.RecipeModel.find({ cluster_label: cluster_num });
    }
}
exports.Recipe = Recipe;
//# sourceMappingURL=recipeModel.js.map