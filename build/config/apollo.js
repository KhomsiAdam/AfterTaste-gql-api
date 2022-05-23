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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeExpress = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const apollo_server_plugin_response_cache_1 = __importDefault(require("apollo-server-plugin-response-cache"));
const apollo_server_express_1 = require("apollo-server-express");
const logger_service_1 = require("../services/logger.service");
const _middlewares_1 = require("../middlewares");
const context_1 = require("./context");
const port = process.env.PORT || 4000;
const initializeExpress = (schema) => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)());
    app.use(body_parser_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use(_middlewares_1.morgan);
    app.use((0, compression_1.default)());
    app.use('/graphql', _middlewares_1.limiter);
    app.use(express_1.default.json({ limit: '10kb' }));
    app.use((0, express_mongo_sanitize_1.default)());
    const server = new apollo_server_express_1.ApolloServer({
        introspection: true,
        context: context_1.context,
        schema,
        plugins: [(0, apollo_server_plugin_response_cache_1.default)()],
        validationRules: [(0, graphql_depth_limit_1.default)(7)],
        formatError: (err) => {
            if (err.message.startsWith('Database Error:')) {
                return new Error('Internal server error');
            }
            return err;
        },
    });
    yield server.start();
    server.applyMiddleware({
        app,
        path: '/graphql',
        cors: { origin: process.env.CLIENT_ORIGIN, credentials: true },
    });
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        logger_service_1.log.info(`Server ready at: http://localhost:${port}${server.graphqlPath}`);
    }));
});
exports.initializeExpress = initializeExpress;
//# sourceMappingURL=apollo.js.map