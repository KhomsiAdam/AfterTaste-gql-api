"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderSchema = exports.createOrderSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createOrderSchema = joi_1.default.object({
    user: joi_1.default.string().trim().required(),
    products: joi_1.default.array().items(joi_1.default.string().trim()),
    productsQuantity: joi_1.default.array().items(joi_1.default.number()),
    menus: joi_1.default.array().items(joi_1.default.string().trim()),
    menusQuantity: joi_1.default.array().items(joi_1.default.number()),
    status: joi_1.default.string().trim().required(),
});
exports.updateOrderSchema = joi_1.default.object({
    user: joi_1.default.string().trim(),
    products: joi_1.default.array().items(joi_1.default.string().trim()),
    productsQuantity: joi_1.default.array().items(joi_1.default.number()),
    menus: joi_1.default.array().items(joi_1.default.string().trim()),
    menusQuantity: joi_1.default.array().items(joi_1.default.number()),
    status: joi_1.default.string().trim(),
});
//# sourceMappingURL=validation.js.map