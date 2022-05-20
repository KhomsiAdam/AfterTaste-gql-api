"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALT_ROUNDS = exports.ErrorMessages = exports.SuccessMessages = void 0;
var SuccessMessages;
(function (SuccessMessages) {
    SuccessMessages["ADMIN_UPDATED"] = "Admin updated successfully.";
    SuccessMessages["ADMIN_DELETED"] = "Admin deleted successfully.";
})(SuccessMessages = exports.SuccessMessages || (exports.SuccessMessages = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["ADMINS_NOT_FOUND"] = "No admins found.";
    ErrorMessages["ADMIN_NOT_FOUND"] = "Admin was not found.";
})(ErrorMessages = exports.ErrorMessages || (exports.ErrorMessages = {}));
exports.SALT_ROUNDS = 12;
//# sourceMappingURL=constants.js.map