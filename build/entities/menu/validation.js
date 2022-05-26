"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMenuSchema = exports.createMenuSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createMenuSchema = joi_1.default.object({
    name: joi_1.default.string().trim().required(),
    products: joi_1.default.array().items(joi_1.default.string().trim()).required(),
});
exports.updateMenuSchema = joi_1.default.object({
    name: joi_1.default.string().trim(),
    products: joi_1.default.array().items(joi_1.default.string().trim()),
});
//# sourceMappingURL=validation.js.map