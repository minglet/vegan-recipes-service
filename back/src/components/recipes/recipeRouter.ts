import { Router } from "express";
import { login_required } from "../../lib/login_required";
import { userAuthService } from "../users/userService";
import { recipeService } from "./recipeService";

const recipeRouter = Router();

/** Get recipes list  */
recipeRouter.get(
  "/recipes",
  async function (req, res, next) {
    try {
      res.status(200).send(await recipeService.getRecipes());
    } catch (error) {
      next(error);
    }
  }
);

/** Get recipe info  */
recipeRouter.get(
  "/recipes/current/:recipeId",
  async function (req, res, next) {
    try {
      res
        .status(200)
        .send(await recipeService.getRecipeInfo(req.params.recipeId));
    } catch (error) {
      next(error);
    }
  }
);

/** Get the most similar recipe */ 
recipeRouter.get(
  "/recipes/current/:recipeId/rec",
  login_required,
  async function (req, res, next) {
    try {
      const user_id = req.currentUserId;
      const user_info = await userAuthService.getUserInfo({user_id})
      const recipe_like : string[] = user_info.recipe_scraps

      // 가장 최근 좋아요한 레시피
      const recent_like : string = recipe_like[recipe_like.length - 1]
      const find_recipe = await recipeService.getRecipeIndex(recent_like)
      const similar_recipe = await recipeService.getSimilarRecipes(find_recipe)
      
      res.status(200).send(similar_recipe)
    } catch (error) {
      next(error);
    }
  }
);
export { recipeRouter };
