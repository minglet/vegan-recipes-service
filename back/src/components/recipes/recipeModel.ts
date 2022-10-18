import { RecipeModel } from "./recipeSchema";

class Recipe {

  static async findById({ recipe_id }: { recipe_id: string }) {
    return await RecipeModel.findOne({ _id: recipe_id });
  }

  static async findAll() {
    return await RecipeModel.find({});
  }

}

export { Recipe };
