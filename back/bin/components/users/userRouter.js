"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthRouter = void 0;
const express_1 = require("express");
const notfound_error_1 = require("src/utils/error/notfound.error");
const login_required_1 = require("../../lib/login_required");
const recipeService_1 = require("../recipes/recipeService");
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
        const { email, password } = req.body;
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
userAuthRouter.put("/users/:userId", login_required_1.login_required, async function (req, res, next) {
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
userAuthRouter.put("/scrap/addscrap/:recipeId", login_required_1.login_required, async (req, res, next) => {
    try {
        const user_id = req.currentUserId;
        const currentUserInfo = await userService_1.userAuthService.getUserInfo({
            user_id,
        });
        const recipe_scraps = currentUserInfo.recipe_scraps;
        const recipe_id = req.params.recipeId;
        if (recipe_scraps.includes(recipe_id)) {
            recipe_scraps.splice(recipe_scraps.indexOf(recipe_id), 1);
        }
        else {
            recipe_scraps.push(recipe_id);
        }
        const toUpdate = { recipe_scraps };
        const updatedUser = await userService_1.userAuthService.setUser({ user_id, toUpdate });
        res.status(200).json(updatedUser);
    }
    catch (err) {
        next(err);
    }
});
userAuthRouter.put("/users/unscrap/:recipeId", login_required_1.login_required, async (req, res, next) => {
    try {
        const user_id = req.currentUserId;
        const recipe_id = req.params.recipeId;
        const user_info = await userService_1.userAuthService.getUserInfo({
            user_id
        });
        const recipe_scraps = user_info.recipe_scraps;
        if (recipe_scraps.includes(recipe_id)) {
            recipe_scraps.splice(recipe_scraps.indexOf(recipe_id), 1);
        }
        else {
            throw new notfound_error_1.NotFoundError("해당 레시피가 존재하지 않습니다. 레시피 id를 다시 확인해주세요.");
        }
        const toUpdate = { recipe_scraps };
        res.status(200).send(await userService_1.userAuthService.setUser({ user_id, toUpdate }));
    }
    catch (err) {
        next(err);
    }
});
userAuthRouter.get("/scraps", login_required_1.login_required, async (req, res, next) => {
    try {
        const user_id = req.currentUserId;
        const user_info = await userService_1.userAuthService.getUserInfo({ user_id });
        const recipe_arr = user_info.recipe_scraps;
        const mapping = [];
        await Promise.all(recipe_arr.map(async (data) => {
            const result = await recipeService_1.recipeService.getRecipeInfo(data);
            mapping.push(result);
            return mapping;
        }));
        res.status(200).json(mapping);
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=userRouter.js.map