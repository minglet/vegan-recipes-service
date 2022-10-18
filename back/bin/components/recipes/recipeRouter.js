"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = void 0;
const express_1 = require("express");
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
//# sourceMappingURL=recipeRouter.js.map