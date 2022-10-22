"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_validator_1 = require("./login.validator");
const register_validator_1 = require("./register.validator");
exports.default = {
    login: login_validator_1.loginSchema,
    register: register_validator_1.registerSchema,
};
//# sourceMappingURL=index.js.map