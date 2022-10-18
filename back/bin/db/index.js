"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("../lib/Logging"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = async (dbUrl) => {
    mongoose_1.default
        .connect(dbUrl, { retryWrites: true, w: "majority" })
        .then(() => {
        Logging_1.default.info("Connected to MongoDB!!");
    })
        .catch((err) => {
        Logging_1.default.error("Unable to connect: ");
        Logging_1.default.error(err);
    });
};
//# sourceMappingURL=index.js.map