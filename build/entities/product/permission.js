"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = require("../../middlewares/rules");
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Query: {
        getAllProducts: graphql_shield_1.allow,
        getProductById: graphql_shield_1.allow,
        getProductByField: graphql_shield_1.allow,
    },
    Mutation: {
        createProduct: rules_1.is.Admin,
        updateProduct: rules_1.is.Admin,
        removeProduct: rules_1.is.Admin,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map