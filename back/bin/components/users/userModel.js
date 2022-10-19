"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrap = exports.User = void 0;
const userSchema_1 = require("./userSchema");
class User {
    static async create({ newUser }) {
        return await userSchema_1.UserModel.create(newUser);
    }
    static async findByEmail({ email }) {
        return await userSchema_1.UserModel.findOne({ email });
    }
    static async findById({ user_id }) {
        return await userSchema_1.UserModel.findOne({ id: user_id });
    }
    static async findAll() {
        return await userSchema_1.UserModel.find({});
    }
    static async update({ user_id, fieldToUpdate, newValue }) {
        const filter = { id: user_id };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };
        const updatedUser = await userSchema_1.UserModel.findOneAndUpdate(filter, update, option);
        return updatedUser;
    }
}
exports.User = User;
class Scrap {
    static async findByUserIdAndRecipeId({ userId, recipeId }) {
        return await userSchema_1.UserModel.findOne({ _id: userId, recipe_scraps: recipeId });
    }
    static async create({ userId, recipeId }) {
        return await userSchema_1.UserModel.findOneAndUpdate({ _id: userId }, { $addToSet: { recipe_scraps: recipeId } });
    }
    static async findById({ user_id }) {
        return await userSchema_1.UserModel.findOne({ id: user_id });
    }
    static async findAll() {
        return await userSchema_1.UserModel.find({});
    }
    static async update({ recipe_scraps, fieldToUpdate, newValue }) {
        const filter = { id: recipe_scraps };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };
        const updatedUser = await userSchema_1.UserModel.findOneAndUpdate(filter, update, option);
        return updatedUser;
    }
}
exports.Scrap = Scrap;
//# sourceMappingURL=userModel.js.map