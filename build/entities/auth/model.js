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
exports.AuthModel = void 0;
const mongoose_1 = require("mongoose");
const model_1 = require("../../entities/admin/model");
const model_2 = require("../../entities/user/model");
const constants_1 = require("./constants");
const AuthSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: Object.values(constants_1.Roles),
        required: true,
    },
    refreshToken: [
        {
            type: String,
            default: [],
            select: false,
        },
    ],
}, { timestamps: true });
AuthSchema.post('save', (doc) => __awaiter(void 0, void 0, void 0, function* () {
    if (doc.role === 'Admin') {
        yield model_1.AdminModel.updateOne({ email: doc.email }, { role: doc._id });
    }
    else {
        yield model_2.UserModel.updateOne({ email: doc.email }, { role: doc._id });
    }
}));
exports.AuthModel = (0, mongoose_1.model)('Auth', AuthSchema);
//# sourceMappingURL=model.js.map