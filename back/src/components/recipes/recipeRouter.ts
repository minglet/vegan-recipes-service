import { Router } from "express";
import { NotFoundError } from "../../utils/error/notfound.error";
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

      const recipe_id = req.params.recipeId

      if (!recipe_like.includes(recipe_id)) {
        throw new NotFoundError("좋아요 레시피 리스트에서 찾을 수 없습니다.")
      }

      // 좋아요한 레시피와 유사성이 높은 레시피 찾기
      const find_recipe = await recipeService.getRecipeIndex(recipe_id)
      const similar_recipe = await recipeService.getSimilarRecipes(find_recipe)
      
      res.status(200).send(similar_recipe)
    } catch (error) {
      next(error);
    }
  }
);
export { recipeRouter };
