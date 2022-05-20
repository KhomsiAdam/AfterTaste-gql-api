"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = require("../../middlewares/rules");
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Query: {
        getAllUsers: rules_1.is.Auth,
        getUserById: rules_1.is.Auth,
        getUserByField: rules_1.is.Auth,
    },
    Mutation: {
        updateUser: (0, graphql_shield_1.or)(rules_1.is.Self, rules_1.is.Admin),
        deleteUser: (0, graphql_shield_1.or)(rules_1.is.Self, rules_1.is.Admin),
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map