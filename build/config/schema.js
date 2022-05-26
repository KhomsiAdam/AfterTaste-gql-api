"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.permissions = void 0;
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const schema_1 = require("@graphql-tools/schema");
const graphql_shield_1 = require("graphql-shield");
const globalTypeDefs_1 = require("./globalTypeDefs");
const typesArray = (0, load_files_1.loadFilesSync)('./src/entities/**/typeDefs.*');
const resolversArray = (0, load_files_1.loadFilesSync)('./src/entities/**/resolvers.*');
const permissionArray = (0, load_files_1.loadFilesSync)('./src/entities/**/permission.*');
typesArray.push(globalTypeDefs_1.globalTypeDefs);
const typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);
const resolvers = (0, merge_1.mergeResolvers)(resolversArray);
exports.permissions = (0, graphql_shield_1.shield)((0, merge_1.mergeResolvers)(permissionArray), {
    fallbackRule: graphql_shield_1.allow,
    allowExternalErrors: true,
});
exports.schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers });
//# sourceMappingURL=schema.js.map