"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("../lib/Logging"));
exports.default = (err, req, res, next) => {
    Logging_1.default.error(err.message);
    console.log(`에러다!: ${err}`);
    console.log(JSON.stringify(err));
    return res.status(err.status).json(err);
};
//# sourceMappingURL=errorHandler.middleware.js.map