"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolver = __importStar(require("../../services/crud.service"));
const model_1 = require("./model");
const constants_1 = require("./constants");
const validation_1 = require("./validation");
exports.resolvers = {
    Query: {
        getAllOrders: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () { return resolver.getAll(model_1.OrderModel, args, constants_1.ErrorMessages.ORDERS_NOT_FOUND, 'Orders', 'OrderNotFound'); }),
        getOrderById: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () { return resolver.getById(model_1.OrderModel, args.id, constants_1.ErrorMessages.ORDER_NOT_FOUND, 'OrderBy', 'OrderNotFound'); }),
        getOrderByField: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.getByField(model_1.OrderModel, args.field, args.value, constants_1.ErrorMessages.ORDER_NOT_FOUND, 'OrderBy', 'OrderNotFound');
        }),
    },
    Mutation: {
        createOrder: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.create(model_1.OrderModel, args.input, validation_1.createOrderSchema, constants_1.SuccessMessages.ORDER_CREATED, 'OrderCreated', 'OrderNotFound');
        }),
        updateOrder: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.update(model_1.OrderModel, args.id, args.input, validation_1.updateOrderSchema, constants_1.SuccessMessages.ORDER_UPDATED, constants_1.ErrorMessages.ORDER_NOT_FOUND, 'OrderUpdated', 'OrderNotFound');
        }),
        removeOrder: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.remove(model_1.OrderModel, args.id, constants_1.SuccessMessages.ORDER_DELETED, constants_1.ErrorMessages.ORDER_NOT_FOUND, 'OrderRemoved', 'OrderNotFound');
        }),
    },
};
//# sourceMappingURL=resolvers.js.map