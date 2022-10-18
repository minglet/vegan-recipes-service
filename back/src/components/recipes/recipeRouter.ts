import { Router } from "express";
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


export { recipeRouter };
