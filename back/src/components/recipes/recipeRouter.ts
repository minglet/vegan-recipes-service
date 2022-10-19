import { Router } from "express";
import { login_required } from "src/lib/login_required";
import { recipeService } from "./recipeService";
// import { spawn } from "child_process";


const recipeRouter = Router();
// const spawn = child_process.spawn()

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

/** python 연결 */
// recipeRouter.get(
//   "/current/:recipeId/rec",
//   login_required,
//   async function (req, res, next) {
//     try {
//       // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
//       // const user_id = req.currentUserId;
//       // const recipe_like : string[] = ['63490495c6fc520554b62445']

//       const net = spawn('python3', ['clustering.py', '8', '19'])

//       net.stdout.on('data', function(data) {
//         console.log(data.toString());
//         if (data) {
//           res
//             .status(200)
//             .send('minah');
//         } else {
//           res
//             .status(200)
//             .send('na');
//         }
//       })
//     } catch (error) {
//       next(error);
//     }
//   }
// );

recipeRouter.get(
  "/current/:recipeId/rec",
  login_required,
  async function (req, res, next) {
    try {
      // jwt토큰에서 추출된 사용자 id를 가지고 db에서 사용자 정보를 찾음.
      // const user_id = req.currentUserId;
      const recipe_like : string[] = ['634f650aee628bd037c6dc91', '634f650aee628bd037c6dc90','634f650aee628bd037c6dca3']
      const recent_like : string = recipe_like[recipe_like.length - 1]

      const find_recipe = await recipeService.getRecipeInfo(recent_like)
      const cluster_recipes: any = await recipeService.getSimilarRecipes(find_recipe.cluster_label)

      // 같은 recipe_id를 갖는 것을 제외하기
      res.status(200).send(cluster_recipes)
    } catch (error) {
      next(error);
    }
  }
);
export { recipeRouter };
