"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeService = void 0;
const notfound_error_1 = require("../../utils/error/notfound.error");
const recipeModel_1 = require("./recipeModel");
class recipeService {
    static async getRecipes() {
        return await recipeModel_1.Recipe.findAll();
    }
    static async getRecipeInfo(recipe_id) {
        const recipe = await recipeModel_1.Recipe.findById({ recipe_id });
        if (!recipe)
            throw new notfound_error_1.NotFoundError("해당 레시피가 존재하지 않습니다.😢");
        return recipe;
    }
    static async getSimilarRecipes(cluster_num) {
        return await recipeModel_1.Recipe.findByClusterNum({ cluster_num });
    }
}
exports.recipeService = recipeService;
//# sourceMappingURL=recipeService.js.map