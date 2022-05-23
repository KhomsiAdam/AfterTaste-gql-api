"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = void 0;
const mongoose_1 = require("mongoose");
const MenuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    products: {
        type: [mongoose_1.Schema.Types.ObjectId],
        required: true,
    },
}, { timestamps: true });
exports.MenuModel = (0, mongoose_1.model)('Menu', MenuSchema);
//# sourceMappingURL=model.js.map