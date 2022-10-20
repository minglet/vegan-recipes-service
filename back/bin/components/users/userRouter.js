"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRouter = void 0;
const express_1 = require("express");
const login_required_1 = require("../../lib/login_required");
const userService_1 = require("./userService");
const validator_middleware_1 = __importDefault(require("../../middleware/validator.middleware"));
const userAuthRouter = (0, express_1.Router)();
exports.userAuthRouter = userAuthRouter;
userAuthRouter.post("/user/register", (0, validator_middleware_1.default)('register'), async function (req, res, next) {
    try {
        const { name, email, password } = req.body;
        const newUser = await userService_1.userAuthService.addUser({
            name,
            email,
            password,
        });
        if (newUser.errorMessage) {
            throw new Error(newUser.errorMessage);
        }
        res.status(201).json(newUser);
    }
    catch (error) {
        next(error);
    }
});
userAuthRouter.post("/user/login", (0, validator_middleware_1.default)('login'), async function (req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await userService_1.userAuthService.getUser({ email, password });
        if (user.errorMessage) {
            throw new Error(user.errorMessage);
        }
        res.status(200).send(user);
    }
    catch (error) {
        next(error);
    }
});
userAuthRouter.get("/userlist", login_required_1.login_required, async function (req, res, next) {
    try {
        const users = await userService_1.userAuthService.getUsers();
        res.status(200).send(users);
    }
    catch (error) {
        next(error);
    }
});
userAuthRouter.get("/user/current", login_required_1.login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const currentUserInfo = await userService_1.userAuthService.getUserInfo({
            user_id,
        });
        if (currentUserInfo.errorMessage) {
            throw new Error(currentUserInfo.errorMessage);
        }
        res.status(200).send(currentUserInfo);
    }
    catch (error) {
        next(error);
    }
});
userAuthRouter.put("/users/:userId", (0, validator_middleware_1.default)('edit'), login_required_1.login_required, async function (req, res, next) {
    var _a, _b;
    try {
        const currentUser = req.currentUserId;
        const user_id = req.params.userId;
        if (user_id != currentUser) {
            throw new Error('path paramater로 보낸 유저 id와 로그인된 유저 id 값이 달라 수정을 제한합니다.');
        }
        const name = (_a = req.body.name) !== null && _a !== void 0 ? _a : null;
        const password = (_b = req.body.password) !== null && _b !== void 0 ? _b : null;
        const toUpdate = { name, password };
        const updatedUser = await userService_1.userAuthService.setUser({ user_id, toUpdate });
        if (updatedUser.errorMessage) {
            throw new Error(updatedUser.errorMessage);
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        next(error);
    }
});
userAuthRouter.get("/afterlogin", login_required_1.login_required, function (req, res, next) {
    res
        .status(200)
        .send(`안녕하세요 ${req.currentUserId}님, jwt 웹 토큰 기능 정상 작동 중입니다.`);
});
//# sourceMappingURL=userRouter.js.map