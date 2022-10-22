"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = require("express");
const notfound_error_1 = require("../../utils/error/notfound.error");
const login_required_1 = require("../../lib/login_required");
const userService_1 = require("../users/userService");
const recipeService_1 = require("./recipeService");
const recipeRouter = (0, express_1.Router)();
exports.recipeRouter = recipeRouter;
recipeRouter.get("/recipes", async function (req, res, next) {
    try {
        res.status(200).send(await recipeService_1.recipeService.getRecipes());
    }
    catch (error) {
        next(error);
    }
});
recipeRouter.get("/recipes/current/:recipeId", async function (req, res, next) {
    try {
        res
            .status(200)
            .send(await recipeService_1.recipeService.getRecipeInfo(req.params.recipeId));

    }
    catch (error) {
        next(error);
    }
});
recipeRouter.get("/recipes/current/:recipeId/rec", login_required_1.login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const user_info = await userService_1.userAuthService.getUserInfo({ user_id });
        const recipe_like = user_info.recipe_scraps;
        const recipe_id = req.params.recipeId;
        if (!recipe_like.includes(recipe_id)) {
            throw new notfound_error_1.NotFoundError("좋아요 레시피 리스트에서 찾을 수 없습니다.");
        }
        const find_recipe = await recipeService_1.recipeService.getRecipeIndex(recipe_id);
        const similar_recipe = await recipeService_1.recipeService.getSimilarRecipes(find_recipe);
        res.status(200).send(similar_recipe);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=recipeRouter.js.map