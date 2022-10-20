import { RecipeModel } from "./recipeSchema";

class Recipe {

  static async findById({ recipe_id }: { recipe_id: string }) {
    return await RecipeModel.findOne({ _id: recipe_id });
  }

  static async findAll() {
    return await RecipeModel.find({});
  }

  static async findByClusterNum({ cluster_num }: { cluster_num: string }) {
    return await RecipeModel.find({ cluster_label: cluster_num });
  }
}

export { Recipe };
