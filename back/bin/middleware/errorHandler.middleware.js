"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifErrorMessage = exports.errorMiddleware = void 0;
const Logging_1 = __importDefault(require("../lib/Logging"));
exports.default = (err, req, res, next) => {
    Logging_1.default.error(err.message);
    console.log(`에러다!: ${err}`);
    console.log(JSON.stringify(err));
    return res.status(err.status).json(err);
};
function errorMiddleware(error, req, res, next) {
    console.log("\x1b[33m%s\x1b[0m", error);
    res.status(400).send(error.message);
}
exports.errorMiddleware = errorMiddleware;
const ifErrorMessage = (target) => {
    if (target.errorMessage) {
        throw new Error(target.errorMessage);
    }
};
exports.ifErrorMessage = ifErrorMessage;
//# sourceMappingURL=errorHandler.middleware.js.map