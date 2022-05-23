"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = exports.SuccessMessages = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["PAID"] = "paid";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var SuccessMessages;
(function (SuccessMessages) {
    SuccessMessages["ORDER_CREATED"] = "Order created successfully.";
    SuccessMessages["ORDER_UPDATED"] = "Order updated successfully.";
    SuccessMessages["ORDER_DELETED"] = "Order deleted successfully.";
})(SuccessMessages = exports.SuccessMessages || (exports.SuccessMessages = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["ORDERS_NOT_FOUND"] = "No orders found.";
    ErrorMessages["ORDER_NOT_FOUND"] = "Order was not found.";
})(ErrorMessages = exports.ErrorMessages || (exports.ErrorMessages = {}));
//# sourceMappingURL=constants.js.map