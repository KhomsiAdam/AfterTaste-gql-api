"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = require("../../middlewares/rules");
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Query: {
        getAllMenus: graphql_shield_1.allow,
        getMenuById: graphql_shield_1.allow,
        getMenuByField: graphql_shield_1.allow,
    },
    Mutation: {
        createMenu: rules_1.is.Admin,
        updateMenu: rules_1.is.Admin,
        removeMenu: rules_1.is.Admin,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map