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
exports.resolvers = void 0;
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
const auth_service_1 = require("../../services/auth.service");
const logger_service_1 = require("../../services/logger.service");
const customResponse_1 = require("../../helpers/customResponse");
const model_1 = require("../../entities/user/model");
const model_2 = require("./model");
const constants_1 = require("./constants");
const validation_1 = require("./validation");
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, JWT_ACCESS_EXPIRATION, JWT_REFRESH_EXPIRATION } = process.env;
exports.resolvers = {
    Mutation: {
        register: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { error } = validation_1.registerSchema.validate(args.input);
            if (error)
                return customResponse_1.customResponse.message('AuthError', error.message);
            const fetchedUser = yield model_2.AuthModel.findOne({
                email: args.input.email,
            });
            if (fetchedUser && fetchedUser.role.toLowerCase() === 'admin')
                return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.REGISTER_ERROR);
            if (fetchedUser)
                return customResponse_1.customResponse.message('AuthError', `User ${constants_1.ErrorMessages.DUPLICATE_ERROR} email.`);
            if (args.input.role) {
                if (args.input.role.toLowerCase() === 'admin')
                    return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.REGISTER_ERROR);
                try {
                    const RoleModel = (0, mongoose_1.model)(args.input.role.toUpperCase().charAt(0) + args.input.role.toLowerCase().slice(1));
                    delete args.input.role;
                    const newUser = new RoleModel(args.input);
                    yield newUser.save();
                    return customResponse_1.customResponse.message('Register', constants_1.SuccessMessages.REGISTER_SUCCESS);
                }
                catch (_a) {
                    return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.REGISTER_ERROR);
                }
            }
            else {
                const newUser = new model_1.UserModel(args.input);
                yield newUser.save();
                return customResponse_1.customResponse.message('Register', constants_1.SuccessMessages.REGISTER_SUCCESS);
            }
        }),
        login: (_parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const { error } = validation_1.loginSchema.validate(args.input);
            if (error)
                return customResponse_1.customResponse.message('AuthError', error.message);
            const foundUser = yield (0, auth_service_1.findUser)(args.input.email);
            if (!foundUser)
                return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.LOGIN_ERROR);
            const passwordCompareResult = yield (0, bcryptjs_1.compare)(args.input.password, foundUser.user.password);
            if (!passwordCompareResult)
                return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.LOGIN_ERROR);
            const { cookies } = context.req;
            let newRefreshTokenArray = !(cookies === null || cookies === void 0 ? void 0 : cookies.rtkn)
                ? foundUser.role.refreshToken
                : foundUser.role.refreshToken.filter((rt) => rt !== cookies.rtkn);
            if (cookies === null || cookies === void 0 ? void 0 : cookies.rtkn) {
                const refreshToken = cookies === null || cookies === void 0 ? void 0 : cookies.rtkn;
                const compromisedUser = yield model_2.AuthModel.findOne({ refreshToken }, 'refreshToken');
                if (compromisedUser) {
                    logger_service_1.log.warn('Detected refresh token reuse at login.');
                    newRefreshTokenArray = [];
                    const compromisedUserTokens = compromisedUser.refreshToken.filter((rt) => rt !== cookies.rtkn);
                    compromisedUser.refreshToken = [...compromisedUserTokens];
                    compromisedUser.save();
                }
            }
            const newRefreshToken = (0, auth_service_1.generateToken)(foundUser.user._id, foundUser.role._id, JWT_REFRESH_SECRET, JWT_REFRESH_EXPIRATION);
            foundUser.role.refreshToken = [...newRefreshTokenArray, newRefreshToken];
            yield foundUser.role.save();
            (0, auth_service_1.sendRefreshToken)(context.res, newRefreshToken);
            const newAccessToken = (0, auth_service_1.generateToken)(foundUser.user._id, foundUser.role._id, JWT_ACCESS_SECRET, JWT_ACCESS_EXPIRATION);
            return customResponse_1.customResponse.auth('Login', newAccessToken, foundUser.user.role, constants_1.SuccessMessages.LOGGED_IN);
        }),
        refresh: (_parent, _args, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _b, _c;
            const refreshToken = (_c = (_b = context === null || context === void 0 ? void 0 : context.req) === null || _b === void 0 ? void 0 : _b.cookies) === null || _c === void 0 ? void 0 : _c.rtkn;
            if (!refreshToken)
                return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.NOT_LOGGED_IN);
            const foundUser = yield model_2.AuthModel.findOne({ refreshToken }, 'refreshToken role');
            if (!foundUser) {
                try {
                    const decoded = (0, jsonwebtoken_1.verify)(refreshToken, JWT_REFRESH_SECRET);
                    logger_service_1.log.warn('Detected refresh token reuse at refresh.');
                    yield model_2.AuthModel.updateOne({ _id: decoded.roleId }, { $set: { refreshToken: [] } });
                    return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.FORBIDDEN);
                }
                catch (error) {
                    return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.FORBIDDEN);
                }
            }
            else {
                const newRefreshTokenArray = foundUser.refreshToken.filter((rt) => rt !== refreshToken);
                try {
                    const decoded = (0, jsonwebtoken_1.verify)(refreshToken, JWT_REFRESH_SECRET);
                    const newRefreshToken = (0, auth_service_1.generateToken)(decoded.userId, decoded.roleId, JWT_REFRESH_SECRET, JWT_REFRESH_EXPIRATION);
                    foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
                    yield foundUser.save();
                    (0, auth_service_1.sendRefreshToken)(context.res, newRefreshToken);
                    const newAccessToken = (0, auth_service_1.generateToken)(decoded.userId, decoded.roleId, JWT_ACCESS_SECRET, JWT_ACCESS_EXPIRATION);
                    return customResponse_1.customResponse.auth('Refresh', newAccessToken, foundUser.role, constants_1.SuccessMessages.REFRESH_SUCCESS);
                }
                catch (error) {
                    foundUser.refreshToken = [...newRefreshTokenArray];
                    yield foundUser.save();
                    return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.TOKEN_EXPIRED);
                }
            }
        }),
        logout: (_parent, _args, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _d, _e;
            const refreshToken = (_e = (_d = context.req) === null || _d === void 0 ? void 0 : _d.cookies) === null || _e === void 0 ? void 0 : _e.rtkn;
            if (!refreshToken)
                return customResponse_1.customResponse.message('AuthError', constants_1.ErrorMessages.NOT_LOGGED_IN);
            const foundUser = yield model_2.AuthModel.findOne({ refreshToken }, 'refreshToken');
            if (!foundUser) {
                (0, auth_service_1.clearRefreshToken)(context.res);
                return customResponse_1.customResponse.message('Logout', constants_1.SuccessMessages.LOGGED_OUT);
            }
            foundUser.refreshToken = foundUser.refreshToken.filter((rt) => rt !== refreshToken);
            yield foundUser.save();
            (0, auth_service_1.clearRefreshToken)(context.res);
            return customResponse_1.customResponse.message('Logout', constants_1.SuccessMessages.LOGGED_OUT);
        }),
    },
};
//# sourceMappingURL=resolvers.js.map