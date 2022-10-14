"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URL = "mongodb+srv://minglet:als9531213@cluster0.zi6ygoe.mongodb.net/";
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;
exports.db = {
    mongo: {
        url: MONGODB_URL
    },
    server: {
        port: SERVER_PORT
    }
};
//# sourceMappingURL=index.js.map