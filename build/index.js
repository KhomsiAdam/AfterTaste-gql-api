"use strict";
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
require("dotenv/config");
const apollo_1 = require("./config/apollo");
const schema_1 = require("./config/schema");
const graphql_middleware_1 = require("graphql-middleware");
const db_1 = require("./config/db");
const initializeServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const generatedSchema = (0, graphql_middleware_1.applyMiddleware)(schema_1.schema, schema_1.permissions);
    (0, apollo_1.initializeExpress)(generatedSchema);
    yield (0, db_1.initializeDatabaseConnection)();
});
initializeServer();
//# sourceMappingURL=index.js.map