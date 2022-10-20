"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = require("express");
const login_required_1 = require("../../lib/login_required");
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
        const recipe_like = ["634f650aee628bd037c6dc90", "634f650aee628bd037c6dc91", "634f650aee628bd037c6dc9a"];
        const recent_like = recipe_like[recipe_like.length - 1];
        const find_recipe = await recipeService_1.recipeService.getRecipeInfo(recent_like);
        const cluster_recipes = await recipeService_1.recipeService.getSimilarRecipes(find_recipe.cluster_label);
        const rec_recipes = cluster_recipes.splice(2, 1);
        if (rec_recipes[0]._id == recent_like) {
            const another_recipe = cluster_recipes.splice(3, 1);
            res.status(200).send(another_recipe);
        }
        else {
            res.status(200).send(rec_recipes);
        }
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=recipeRouter.js.map