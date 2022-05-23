"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createProductSchema = joi_1.default.object({
    name: joi_1.default.string().alphanum().trim().required(),
    description: joi_1.default.string().alphanum().trim().required(),
    images: joi_1.default.array().items(joi_1.default.string().trim()).required(),
    price: joi_1.default.number().required(),
});
exports.updateProductSchema = joi_1.default.object({
    name: joi_1.default.string().alphanum().trim(),
    description: joi_1.default.string().alphanum().trim(),
    images: joi_1.default.array().items(joi_1.default.string().trim()),
    price: joi_1.default.number(),
});
//# sourceMappingURL=validation.js.map