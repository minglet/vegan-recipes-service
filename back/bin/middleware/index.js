"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddleWare = void 0;
const errorHandler_middleware_1 = __importDefault(require("./errorHandler.middleware"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Logging_1 = __importDefault(require("../lib/Logging"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRouter_1 = require("../components/users/userRouter");
const recipeRouter_1 = require("../components/recipes/recipeRouter");
const graphRouter_1 = require("../components/graphs/graphRouter");
class MiddleWare {
    constructor(App) {
        App.use((0, cors_1.default)({
            origin: "*",
            credentials: false,
        }));
        App.use(body_parser_1.default.json());
        App.use((req, res, next) => {
            Logging_1.default.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
            res.on("finish", () => {
                Logging_1.default.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: ${res.status}`);
            });
            next();
        });
        App.use(express_1.default.urlencoded({ extended: true }));
        App.use(express_1.default.json());
        App.get("/", (req, res) => {
            res.send("하루한끼 서비스 API 입니다.");
        });
        App.use(userRouter_1.userAuthRouter);
        App.use("/recipes", recipeRouter_1.recipeRouter);
        App.use(graphRouter_1.graphRouter);
        App.use(errorHandler_middleware_1.default);
    }
}
exports.MiddleWare = MiddleWare;
//# sourceMappingURL=index.js.map