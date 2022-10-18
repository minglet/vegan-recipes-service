"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_required = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function login_required(req, res, next) {
    var _a, _b;
    const userToken = (_b = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) !== null && _b !== void 0 ? _b : "null";
    if (userToken === "null") {
        console.log("서비스 사용 요청이 있습니다.하지만, Authorization 토큰: 없음");
        res.status(400).send("로그인한 유저만 사용할 수 있는 서비스입니다.");
        return;
    }
    try {
        const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
        const jwtDecoded = jsonwebtoken_1.default.verify(userToken, secretKey);
        const user_id = jwtDecoded.user_id;
        req.currentUserId = user_id;
        next();
    }
    catch (error) {
        res.status(400).send("정상적인 토큰이 아닙니다. 다시 한 번 확인해 주세요.");
        return;
    }
}
exports.login_required = login_required;
//# sourceMappingURL=login_required.js.map