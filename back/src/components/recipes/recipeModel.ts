import { RecipeModel } from "./recipeSchema";

class Recipe {

  static async findById({ recipe_id }: { recipe_id: string }) {
    return await RecipeModel.findOne({ _id: recipe_id });
  }

  static async findAll() {
    return await RecipeModel.find({});
  }

  static async findByIndex({ sim_idx }: { sim_idx: string }) {
    return await RecipeModel.findOne({ index: sim_idx });
  }
}

export { Recipe };
