"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRouter = void 0;
const express_1 = require("express");
const login_required_1 = require("../../lib/login_required");
const userService_1 = require("./userService");
const userAuthRouter = (0, express_1.Router)();
exports.userAuthRouter = userAuthRouter;
userAuthRouter.post("/user/register", async function (req, res, next) {
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
userAuthRouter.post("/user/login", async function (req, res, next) {
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
userAuthRouter.put("/users/:id", login_required_1.login_required, async function (req, res, next) {
    var _a, _b, _c;
    try {
        const user_id = req.params.id;
        const name = (_a = req.body.name) !== null && _a !== void 0 ? _a : null;
        const email = (_b = req.body.email) !== null && _b !== void 0 ? _b : null;
        const password = (_c = req.body.password) !== null && _c !== void 0 ? _c : null;
        const toUpdate = { name, email, password };
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