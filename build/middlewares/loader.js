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
exports.dataloader = exports.createLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const model_1 = require("../entities/auth/model");
const model_2 = require("../entities/admin/model");
const model_3 = require("../entities/user/model");
const createLoader = (entityModel) => {
    const loader = new dataloader_1.default((keys) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield entityModel.find({ _id: { $in: keys } });
        return keys.map((key) => data.find((item) => item._id.equals(key)));
    }));
    return {
        load: (id) => __awaiter(void 0, void 0, void 0, function* () { return (id ? loader.load(id) : null); }),
        loadMany: (ids) => __awaiter(void 0, void 0, void 0, function* () { return loader.loadMany(ids); }),
        clear: (id) => loader.clear(id),
        clearAll: () => loader.clearAll(),
    };
};
exports.createLoader = createLoader;
exports.dataloader = {
    auth: (0, exports.createLoader)(model_1.AuthModel),
    admin: (0, exports.createLoader)(model_2.AdminModel),
    user: (0, exports.createLoader)(model_3.UserModel),
};
//# sourceMappingURL=loader.js.map