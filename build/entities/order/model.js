"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("./constants");
const OrderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    products: {
        type: [mongoose_1.Schema.Types.ObjectId],
        default: [],
    },
    productsQuantity: {
        type: [Number],
        default: [],
    },
    menus: {
        type: [mongoose_1.Schema.Types.ObjectId],
        default: [],
    },
    menusQuantity: {
        type: [Number],
        default: [],
    },
    status: {
        type: String,
        enum: Object.values(constants_1.OrderStatus),
        required: true,
        default: constants_1.OrderStatus.PENDING,
    },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)('Order', OrderSchema);
//# sourceMappingURL=model.js.map