import { Router } from "express";
import { login_required } from "../../lib/login_required";
import { userAuthService } from "../users/userService";
import { recipeService } from "./recipeService";

const recipeRouter = Router();

// recipes + 경로
// Get recipes list 
recipeRouter.get(
  "/",
  async function (req, res, next) {
    try {
      // 전체 레시피 목록을 얻음
      res.status(200).send(await recipeService.getRecipes());
    } catch (error) {
      next(error);
    }
  }
);

// Get recipe info 
recipeRouter.get(
  "/current/:recipeId",
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      res
        .status(200)
        .send(await recipeService.getRecipeInfo(req.params.recipeId));
    } catch (error) {
      next(error);
    }
  }
);

recipeRouter.get(
  "/current/:recipeId/rec",
  login_required,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      const user_id = req.currentUserId;
      const user_info = await userAuthService.getUserInfo({user_id})
      const recipe_like : string[] = user_info.recipe_scraps
      
      const recent_like : string = recipe_like[recipe_like.length - 1]

      const find_recipe = await recipeService.getRecipeInfo(recent_like)
      const cluster_recipes: any = await recipeService.getSimilarRecipes(find_recipe.cluster_label)

      // 좋아요한 레시피는 제외
      const rec_recipes = cluster_recipes.splice(2,1)
      if (rec_recipes[0]._id == recent_like) {
        // 그 다음 레시피로 보여주기
        const another_recipe = cluster_recipes.splice(3,1)
        res.status(200).send(another_recipe)
      } else {
        res.status(200).send(rec_recipes)
      }

    } catch (error) {
      next(error);
    }
  }
);
export { recipeRouter };
