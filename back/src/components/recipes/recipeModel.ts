import { RecipeModel } from "./recipeSchema";

class Recipe {

  static async findById({ recipe_id }: { recipe_id: string }) {
    const recipe = await RecipeModel.findOne({ _id: recipe_id });
    return recipe;
  }

  static async findAll() {
    const recipes = await RecipeModel.find({});
    return recipes;
  }

}

export { Recipe };
