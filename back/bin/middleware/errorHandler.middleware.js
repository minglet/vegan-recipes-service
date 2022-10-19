"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifErrorMessage = void 0;
const Logging_1 = __importDefault(require("../lib/Logging"));
exports.default = (err, req, res, next) => {
    Logging_1.default.error(err.message);
    return res.status(err.status).json(err);
};
function ifErrorMessage(target) {
    if (target.errorMessage) {
        throw new Error(target.errorMessage);
    }
}
exports.ifErrorMessage = ifErrorMessage;
//# sourceMappingURL=errorHandler.middleware.js.map