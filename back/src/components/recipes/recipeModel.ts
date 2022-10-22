import { RecipeModel } from "./recipeSchema";

class Recipe {
  /** Find recipe by id */
  static async findById({ recipe_id }: { recipe_id: string }) {
    return await RecipeModel.findOne({ _id: recipe_id });
  }

  /** Find all recipe */
  static async findAll() {
    return await RecipeModel.find({});
  }

  /** Find recipe by index */
  static async findByIndex({ sim_idx }: { sim_idx: string }) {
    return await RecipeModel.findOne({ index: sim_idx });
  }
}

export { Recipe };
