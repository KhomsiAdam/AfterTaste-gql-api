"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = exports.CustomError = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
class CustomError extends apollo_server_errors_1.ApolloError {
    constructor(message, statusCode) {
        super(message, statusCode);
        Object.defineProperty(this, 'name', { value: 'CustomError' });
    }
}
exports.CustomError = CustomError;
var StatusCode;
(function (StatusCode) {
    StatusCode["InvalidOperationName"] = "INVALID_OPERATION_NAME";
    StatusCode["JsonWebTokenError"] = "JWT_INVALID_TOKEN";
    StatusCode["SyntaxError"] = "JWT_INVALID_SYNTAX";
    StatusCode["ExpiredToken"] = "JWT_EXPIRED_TOKEN";
    StatusCode["SignatureError"] = "JWT_INVALID_SIGNATURE";
    StatusCode["InvalidAlgorithm"] = "JWT_INVALID_ALGORITHM";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=CustomError.js.map