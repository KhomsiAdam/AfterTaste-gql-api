"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = require("../../middlewares/rules");
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Query: {
        getAllOrders: rules_1.is.Admin,
        getOrderById: rules_1.is.Admin,
        getOrderByField: rules_1.is.Admin,
    },
    Mutation: {
        createOrder: rules_1.is.Auth,
        updateOrder: (0, graphql_shield_1.or)(rules_1.is.Own, rules_1.is.Admin),
        removeOrder: (0, graphql_shield_1.or)(rules_1.is.Own, rules_1.is.Admin),
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map