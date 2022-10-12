"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const userSchema_1 = require("./userSchema");
class User {
    static async create({ newUser }) {
        const createdNewUser = await userSchema_1.UserModel.create(newUser);
        return createdNewUser;
    }
    static async findByEmail({ email }) {
        const user = await userSchema_1.UserModel.findOne({ email });
        return user;
    }
    static async findById({ user_id }) {
        const user = await userSchema_1.UserModel.findOne({ id: user_id });
        return user;
    }
    static async findAll() {
        const users = await userSchema_1.UserModel.find({});
        return users;
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
//# sourceMappingURL=userModel.js.map