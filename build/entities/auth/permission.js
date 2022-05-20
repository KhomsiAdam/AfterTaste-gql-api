"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_shield_1 = require("graphql-shield");
const permission = {
    Mutation: {
        register: graphql_shield_1.allow,
        login: graphql_shield_1.allow,
        refresh: graphql_shield_1.allow,
        logout: graphql_shield_1.allow,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map