"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = require("../../middlewares/rules");
const permission = {
    Query: {
        getAllAdmins: rules_1.is.Admin,
        getAdminById: rules_1.is.Admin,
        getAdminByField: rules_1.is.Admin,
    },
    Mutation: {
        updateAdmin: rules_1.is.Self,
        deleteAdmin: rules_1.is.Self,
    },
};
exports.default = permission;
//# sourceMappingURL=permission.js.map