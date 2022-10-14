import { Recipe } from "./recipeModel"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class recipeService {
  
  /** Get all recipes */
  static async getRecipes() {
    const recipes = await Recipe.findAll();
    return recipes;
  }

  /** Get one recipe info */
  static async getRecipeInfo({ recipe_id }: { recipe_id: any }) {
    const recipe: any = await Recipe.findById({ recipe_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!recipe) {
      const errorMessage : string =
        "해당 레시피가 존재하지 않습니다.😢";
      
      return { errorMessage };
    }

    return recipe;
  }
}

export { recipeService };
