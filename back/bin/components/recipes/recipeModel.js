"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const recipeSchema_1 = require("./recipeSchema");
class Recipe {
    static async findById({ recipe_id }) {
        const recipe = await recipeSchema_1.RecipeModel.findOne({ _id: recipe_id });
        return recipe;
    }
    static async findAll() {
        const recipes = await recipeSchema_1.RecipeModel.find({});
        return recipes;
    }
}
exports.Recipe = Recipe;
//# sourceMappingURL=recipeModel.js.map