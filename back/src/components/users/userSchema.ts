import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    recipe_scraps : {
      type : Array
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export { UserModel };

//Array에 대한 함수. -> filter 
//find를 해도 filter를 해야 하므로.

/*let newRecipeArray = []

for(const i of user.recipe_like) {
if(i != recipeId) {
newRecipeArray.push(i)
}
}

user.recipe_like = newRecipeArray */