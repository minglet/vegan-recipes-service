"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.editSchema = joi_1.default.object({
    password: joi_1.default.string().min(4).required(),
    name: joi_1.default.string().min(2).required(),
});
//# sourceMappingURL=edit.validator.js.map