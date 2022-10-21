"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const validators_1 = __importDefault(require("../validators"));
exports.default = (validator) => {
    if (!validators_1.default.hasOwnProperty(validator))
        throw new Error(`'${validator}' validator is not exist`);
    return async function (req, res, next) {
        try {
            const validated = await validators_1.default[validator].validateAsync(req.body);
            req.body = validated;
            next();
        }
        catch (err) {
            if (err.isJoi)
                return next((0, http_errors_1.default)(422, { message: err.message }));
            next((0, http_errors_1.default)(500));
        }
    };
};
//# sourceMappingURL=validator.middleware.js.map