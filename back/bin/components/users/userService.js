"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthService = void 0;
const userModel_1 = require("./userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bad_request_error_1 = require("../../utils/error/bad-request.error");
class userAuthService {
    static async addUser({ name, email, password }) {
        const user = await userModel_1.User.findByEmail({ email });
        if (user) {
            const errorMessage = "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
            return { errorMessage };
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const id = (0, uuid_1.v4)();
        const newUser = { id, name, email, password: hashedPassword };
        const createdNewUser = await userModel_1.User.create({ newUser });
        createdNewUser.errorMessage = null;
        return createdNewUser;
    }
    static async getUser({ email, password }) {
        const user = await userModel_1.User.findByEmail({ email });
        if (!user)
            throw new bad_request_error_1.BadRequestError("해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
        const correctPasswordHash = user.password;
        const isPasswordCorrect = await bcryptjs_1.default.compare(password, correctPasswordHash);
        if (!isPasswordCorrect)
            throw new bad_request_error_1.BadRequestError("비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.");
        const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
        const token = jsonwebtoken_1.default.sign({ user_id: user.id }, secretKey);
        const id = user.id;
        const name = user.name;
        const loginUser = {
            token,
            id,
            email,
            name,
            errorMessage: null,
        };
        return loginUser;
    }
    static async getUsers() {
        return await userModel_1.User.findAll();
    }
    static async setUser({ user_id, toUpdate }) {
        let user = await userModel_1.User.findById({ user_id });
        if (!user)
            throw new bad_request_error_1.BadRequestError("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
        if (toUpdate.name) {
            const fieldToUpdate = "name";
            const newValue = toUpdate.name;
            user = await userModel_1.User.update({ user_id, fieldToUpdate, newValue });
        }
        if (toUpdate.password) {
            const fieldToUpdate = "password";
            const newValue = await bcryptjs_1.default.hash(toUpdate.password, 10);
            user = await userModel_1.User.update({ user_id, fieldToUpdate, newValue });
        }
        if (toUpdate.recipe_scraps) {
            const fieldToUpdate = "recipe_scraps";
            const newValue = toUpdate.recipe_scraps;
            user = await userModel_1.User.update({ user_id, fieldToUpdate, newValue });
        }
        return user;
    }
    static async getUserInfo({ user_id }) {
        const user = await userModel_1.User.findById({ user_id });
        if (!user) {
            const errorMessage = "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        return user;
    }
}
exports.userAuthService = userAuthService;
//# sourceMappingURL=userService.js.map