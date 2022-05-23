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
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const model_1 = require("../../entities/auth/model");
const constants_1 = require("./constants");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Auth',
    },
    fidelity: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
UserSchema.pre('save', function save(next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password'))
            return next();
        const salt = yield (0, bcryptjs_1.genSalt)(constants_1.SALT_ROUNDS);
        this.password = yield (0, bcryptjs_1.hash)(this.password, salt);
        next();
    });
});
UserSchema.post('save', (doc) => __awaiter(void 0, void 0, void 0, function* () {
    yield model_1.AuthModel.create({ email: doc.email, role: 'User' });
}));
UserSchema.post('findOneAndDelete', (doc) => __awaiter(void 0, void 0, void 0, function* () {
    yield model_1.AuthModel.deleteOne({ email: doc.email });
}));
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=model.js.map