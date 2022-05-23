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
exports.findUser = exports.verifyAuth = exports.clearRefreshToken = exports.sendRefreshToken = exports.generateToken = void 0;
const mongoose_1 = require("mongoose");
const apollo_server_core_1 = require("apollo-server-core");
const jsonwebtoken_1 = require("jsonwebtoken");
const model_1 = require("../entities/auth/model");
const constants_1 = require("../entities/auth/constants");
const _helpers_1 = require("../helpers");
const { JWT_ACCESS_SECRET, REFRESH_TOKEN_ENDPOINT } = process.env;
const generateToken = (payloadUserId, payloadRoleId, secret, expiration) => {
    const payload = {
        userId: payloadUserId,
        roleId: payloadRoleId,
    };
    return (0, jsonwebtoken_1.sign)(payload, secret, {
        expiresIn: expiration,
    });
};
exports.generateToken = generateToken;
const sendRefreshToken = (res, token) => {
    res.cookie(constants_1.cookieName, token, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: REFRESH_TOKEN_ENDPOINT,
        maxAge: 24 * 60 * 60 * 1000,
    });
};
exports.sendRefreshToken = sendRefreshToken;
const clearRefreshToken = (res) => {
    res.clearCookie(constants_1.cookieName, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        path: REFRESH_TOKEN_ENDPOINT,
    });
};
exports.clearRefreshToken = clearRefreshToken;
const verifyAuth = (req, role, permission, argsId) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.get('Authorization');
    if (!(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith('Bearer ')))
        return new apollo_server_core_1.AuthenticationError(constants_1.ErrorMessages.NOT_AUTHENTICATED);
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    if (!token)
        return new apollo_server_core_1.AuthenticationError(constants_1.ErrorMessages.NOT_AUTHENTICATED);
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, JWT_ACCESS_SECRET);
        if (permission && permission === constants_1.Permissions.SELF && argsId && argsId !== decoded.userId)
            return new apollo_server_core_1.ForbiddenError(constants_1.ErrorMessages.NOT_AUTHORIZED);
        if (permission && permission === constants_1.Permissions.OWN && argsId) {
            const { query, operationName } = req.body;
            const queryName = operationName || query.split(' ')[1];
            const entityName = (0, _helpers_1.getEntityFromOperation)((0, mongoose_1.modelNames)(), queryName);
            if (!entityName)
                return new _helpers_1.CustomError(constants_1.ErrorMessages.INVALID_OPERATION_NAME, _helpers_1.StatusCode.InvalidOperationName);
            const findOwnedEntity = entityName && (yield (0, mongoose_1.model)(entityName).findOne({ _id: argsId, user: decoded.userId }).lean());
            if (!findOwnedEntity)
                return new apollo_server_core_1.ForbiddenError(constants_1.ErrorMessages.NOT_AUTHORIZED);
        }
        if (!role)
            return decoded !== null;
        const authorizedUser = yield (0, mongoose_1.model)(role).findOne({ _id: decoded.userId });
        if (!authorizedUser)
            return new apollo_server_core_1.ForbiddenError(constants_1.ErrorMessages.NOT_AUTHORIZED);
        return authorizedUser !== null;
    }
    catch (error) {
        return new _helpers_1.CustomError(error, _helpers_1.StatusCode[error.constructor.name]);
    }
});
exports.verifyAuth = verifyAuth;
const findUser = (inputEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchedRole = (yield model_1.AuthModel.findOne({ email: inputEmail }, 'role refreshToken'));
    if (!fetchedRole)
        return false;
    const fetchedUser = (yield (0, mongoose_1.model)(fetchedRole.role).findOne({ email: inputEmail }, 'password'));
    if (!fetchedUser)
        return false;
    return {
        user: {
            _id: fetchedUser._id,
            password: fetchedUser.password,
            role: fetchedRole.role,
        },
        role: fetchedRole,
    };
});
exports.findUser = findUser;
//# sourceMappingURL=auth.service.js.map