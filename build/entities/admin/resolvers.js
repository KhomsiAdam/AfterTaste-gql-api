"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const resolver = __importStar(require("../../services/crud.service"));
const model_1 = require("./model");
const constants_1 = require("./constants");
const validation_1 = require("./validation");
exports.resolvers = {
    Query: {
        getAllAdmins: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () { return resolver.getAll(model_1.AdminModel, args, constants_1.ErrorMessages.ADMINS_NOT_FOUND, 'Admins', 'AdminNotFound'); }),
        getAdminById: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () { return resolver.getById(model_1.AdminModel, args.id, constants_1.ErrorMessages.ADMIN_NOT_FOUND, 'AdminBy', 'AdminNotFound'); }),
        getAdminByField: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.getByField(model_1.AdminModel, args.field, args.value, constants_1.ErrorMessages.ADMIN_NOT_FOUND, 'AdminBy', 'AdminNotFound');
        }),
    },
    Mutation: {
        updateAdmin: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.update(model_1.AdminModel, args.id, args.input, validation_1.adminSchema, constants_1.SuccessMessages.ADMIN_UPDATED, constants_1.ErrorMessages.ADMIN_NOT_FOUND, 'AdminUpdated', 'AdminNotFound');
        }),
        deleteAdmin: (_parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return resolver.remove(model_1.AdminModel, args.id, constants_1.SuccessMessages.ADMIN_DELETED, constants_1.ErrorMessages.ADMIN_NOT_FOUND, 'AdminDeleted', 'AdminNotFound');
        }),
    },
    Admin: {
        role: ({ role }, _args, { dataloader }) => __awaiter(void 0, void 0, void 0, function* () { return dataloader.auth.load(role); }),
    },
};
//# sourceMappingURL=resolvers.js.map