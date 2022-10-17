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
}
exports.Recipe = Recipe;
//# sourceMappingURL=recipeModel.js.map