"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeService = void 0;
const recipeModel_1 = require("./recipeModel");
class recipeService {
    static async getRecipes() {
        const recipes = await recipeModel_1.Recipe.findAll();
        return recipes;
    }
    static async getRecipeInfo({ recipe_id }) {
        const recipe = await recipeModel_1.Recipe.findById({ recipe_id });
        if (!recipe) {
            const errorMessage = "해당 레시피가 존재하지 않습니다.😢";
            return { errorMessage };
        }
        return recipe;
    }
}
exports.recipeService = recipeService;
//# sourceMappingURL=recipeService.js.map