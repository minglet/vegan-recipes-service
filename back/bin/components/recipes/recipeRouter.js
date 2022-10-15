"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = require("express");
const recipeService_1 = require("./recipeService");
const recipeRouter = (0, express_1.Router)();
exports.recipeRouter = recipeRouter;
recipeRouter.get("/", async function (req, res, next) {
    try {
        const recipes = await recipeService_1.recipeService.getRecipes();
        res.status(200).send(recipes);
    }
    catch (error) {
        next(error);
    }
});
recipeRouter.get("/current/:recipeId", async function (req, res, next) {
    try {
        const recipe_id = req.params.recipeId;
        const currentRecipeInfo = await recipeService_1.recipeService.getRecipeInfo({
            recipe_id,
        });
        if (currentRecipeInfo.errorMessage) {
            throw new Error(currentRecipeInfo.errorMessage);
        }
        res.status(200).send(currentRecipeInfo);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=recipeRouter.js.map