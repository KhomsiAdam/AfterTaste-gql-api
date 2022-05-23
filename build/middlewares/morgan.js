"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const logger_service_1 = require("../services/logger.service");
const stream = {
    write: (message) => logger_service_1.log.http(message.substring(0, message.lastIndexOf('\n'))),
};
const skip = (req) => {
    const env = process.env.NODE_ENV || 'development';
    if (req.body && req.body.operationName && req.body.operationName === 'IntrospectionQuery')
        return true;
    if (req.method === 'OPTIONS')
        return true;
    return env !== 'development';
};
morgan_1.default.token('graphql-query', (req) => {
    if (!req.body)
        return '';
    const { query, operationName } = req.body;
    if (!query)
        return '';
    const queryName = operationName || query.split(' ')[1];
    const operationType = query.split(' ')[0];
    return `${operationType}: ${queryName}`;
});
const morganMiddleware = (0, morgan_1.default)(':method :url :status - :graphql-query - :response-time ms', { stream, skip });
exports.default = morganMiddleware;
//# sourceMappingURL=morgan.js.map