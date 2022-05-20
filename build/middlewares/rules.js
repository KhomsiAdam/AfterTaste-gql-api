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
exports.is = void 0;
const graphql_shield_1 = require("graphql-shield");
const auth_service_1 = require("../services/auth.service");
const constants_1 = require("../entities/auth/constants");
const options = { cache: 'contextual' };
exports.is = {
    Auth: (0, graphql_shield_1.rule)(options)((_parent, _args, context) => __awaiter(void 0, void 0, void 0, function* () { return (0, auth_service_1.verifyAuth)(context.req); })),
    Self: (0, graphql_shield_1.rule)(options)((_parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return (0, auth_service_1.verifyAuth)(context.req, '', constants_1.Permissions.SELF, args.id); })),
    Own: (0, graphql_shield_1.rule)(options)((_parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return (0, auth_service_1.verifyAuth)(context.req, '', constants_1.Permissions.OWN, args.id); })),
    Admin: (0, graphql_shield_1.rule)(options)((_parent, _args, context) => __awaiter(void 0, void 0, void 0, function* () { return (0, auth_service_1.verifyAuth)(context.req, constants_1.Roles.ADMIN); })),
    User: (0, graphql_shield_1.rule)(options)((_parent, _args, context) => __awaiter(void 0, void 0, void 0, function* () { return (0, auth_service_1.verifyAuth)(context.req, constants_1.Roles.USER); })),
};
//# sourceMappingURL=rules.js.map