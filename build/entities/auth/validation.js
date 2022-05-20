"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const constants_1 = require("./constants");
const emailValidation = {
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
};
exports.registerSchema = joi_1.default.object({
    email: joi_1.default.string().email(emailValidation).trim().required(),
    password: joi_1.default.string().trim().min(constants_1.passwordLength).required(),
    firstname: joi_1.default.string().trim().required(),
    lastname: joi_1.default.string().trim().required(),
    role: joi_1.default.string().trim(),
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email(emailValidation).trim().required(),
    password: joi_1.default.string().trim().min(constants_1.passwordLength).required(),
});
//# sourceMappingURL=validation.js.map