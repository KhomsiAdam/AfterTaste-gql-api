"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALT_ROUNDS = exports.ErrorMessages = exports.SuccessMessages = void 0;
var SuccessMessages;
(function (SuccessMessages) {
    SuccessMessages["USER_UPDATED"] = "User updated successfully.";
    SuccessMessages["USER_DELETED"] = "User deleted successfully.";
})(SuccessMessages = exports.SuccessMessages || (exports.SuccessMessages = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["USERS_NOT_FOUND"] = "No users found.";
    ErrorMessages["USER_NOT_FOUND"] = "User was not found.";
})(ErrorMessages = exports.ErrorMessages || (exports.ErrorMessages = {}));
exports.SALT_ROUNDS = 12;
//# sourceMappingURL=constants.js.map