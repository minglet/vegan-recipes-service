import { NotFoundError } from "../../utils/error/notfound.error";
import { Recipe } from "./recipeModel"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

export class recipeService {
  /** Get all recipes */
  static async getRecipes() {
    return await Recipe.findAll();
  }

  /** Get one recipe info */
  static async getRecipeInfo( recipe_id :string) {
    const recipe: any = await Recipe.findById({recipe_id});

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!recipe) throw new NotFoundError("해당 레시피가 존재하지 않습니다.😢");

    return recipe;
  }

  /** Get same cluster recipes */
  static async getSimilarRecipes( cluster_num :string) {
    return await Recipe.findByClusterNum({cluster_num});
  }

}


