"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./db");
const Logging_1 = __importDefault(require("./lib/Logging"));
const userRouter_1 = require("./components/users/userRouter");
const router = (0, express_1.default)();
mongoose_1.default
    .connect(db_1.db.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    Logging_1.default.info('Connected to MongoDB!!');
    StartServer();
})
    .catch((err) => {
    Logging_1.default.error('Unable to connect: ');
    Logging_1.default.error(err);
});
const StartServer = () => {
    router.use((req, res, next) => {
        Logging_1.default.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            Logging_1.default.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: ${res.status}`);
        });
        next();
    });
    router.use((0, cors_1.default)());
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.get("/", (req, res) => {
        res.send("하루한끼 서비스 API 입니다.");
    });
    router.use(userRouter_1.userAuthRouter);
    router.use((req, res, next) => {
        const error = new Error('not found');
        Logging_1.default.error(error);
        return res.status(404).json({ message: error.message });
    });
    router.listen(db_1.db.server.port, () => Logging_1.default.info(`Server is running on port ${db_1.db.server.port}`));
};
//# sourceMappingURL=app.js.map