"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = require("express");
const login_required_1 = require("../../lib/login_required");
const userService_1 = require("../users/userService");
const recipeService_1 = require("./recipeService");
const recipeRouter = (0, express_1.Router)();
exports.recipeRouter = recipeRouter;
recipeRouter.get("/", async function (req, res, next) {
    try {
        res.status(200).send(await recipeService_1.recipeService.getRecipes());
    }
    catch (error) {
        next(error);
    }
});
recipeRouter.get("/current/:recipeId", async function (req, res, next) {
    try {
        res
            .status(200)
            .send(await recipeService_1.recipeService.getRecipeInfo(req.params.recipeId));
    }
    catch (error) {
        next(error);
    }
});
recipeRouter.get("/current/:recipeId/rec", login_required_1.login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const user_info = await userService_1.userAuthService.getUserInfo({ user_id });
        const recipe_like = user_info.recipe_scraps;
        const recent_like = recipe_like[recipe_like.length - 1];
        const find_recipe = await recipeService_1.recipeService.getRecipeIndex(recent_like);
        const similar_recipe = await recipeService_1.recipeService.getSimilarRecipes(find_recipe);
        res.status(200).send(similar_recipe);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=recipeRouter.js.map