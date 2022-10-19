"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapRouter = void 0;
const express_1 = require("express");
const likeSchma_1 = require("./likeSchma");
const errorHandler_middleware_1 = require("../../middleware/errorHandler.middleware");
const scrapRouter = (0, express_1.Router)();
exports.scrapRouter = scrapRouter;
scrapRouter.post("/like/uplike", (req, res) => {
    let { recipeId, userId } = req.body;
    const LikeIns = new likeSchma_1.UserModel({ userId, recipeId });
    LikeIns.save((err, result) => {
        if (err)
            return res.status(400).json({ upLike: false, err });
        return res.status(200).json({ upLike: true });
    });
});
scrapRouter.post("/like/unlike", (req, res) => {
    let { recipeId, userId } = req.body;
    console.log(recipeId, userId);
    likeSchma_1.UserModel.findOneAndDelete({ recipeId: recipeId, userId: userId }).exec((err, result) => {
        if (err)
            return res.status(400).json({ unLike: false, err });
        return res.status(200).json({ unLike: true });
    });
});
scrapRouter.get("/like/getLike/:id", async (req, res, next) => {
    try {
        const userId = req.params.id;
        const likes = await likeSchma_1.UserModel.find({ userId: userId });
        (0, errorHandler_middleware_1.ifErrorMessage)(likes);
        res.status(200).send(likes);
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=scrapRouter.js.map