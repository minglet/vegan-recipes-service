"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config/config");
const db_1 = __importDefault(require("./db"));
const http_1 = __importDefault(require("http"));
const Logging_1 = __importDefault(require("./lib/Logging"));
const app = new app_1.App();
const serverHandler = () => {
    Logging_1.default.info(`서버 가동 ON PORT: ${config_1.SERVER_PORT}`);
};
http_1.default.createServer(app.getApp()).listen(config_1.SERVER_PORT, async () => {
    await (0, db_1.default)(config_1.MONGODB_URL);
    serverHandler();
});
//# sourceMappingURL=server.js.map