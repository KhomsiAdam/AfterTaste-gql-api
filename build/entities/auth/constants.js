"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordLength = exports.cookieName = exports.ErrorMessages = exports.SuccessMessages = exports.Permissions = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Admin";
    Roles["USER"] = "User";
})(Roles = exports.Roles || (exports.Roles = {}));
var Permissions;
(function (Permissions) {
    Permissions["SELF"] = "Self";
    Permissions["OWN"] = "Own";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var SuccessMessages;
(function (SuccessMessages) {
    SuccessMessages["REGISTER_SUCCESS"] = "Account created successfully.";
    SuccessMessages["REFRESH_SUCCESS"] = "Refresh token updated successfully.";
    SuccessMessages["LOGGED_IN"] = "Logged in successfully.";
    SuccessMessages["LOGGED_OUT"] = "Logged out successfully.";
})(SuccessMessages = exports.SuccessMessages || (exports.SuccessMessages = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["LOGIN_ERROR"] = "Unable to login. Please try again.";
    ErrorMessages["NOT_LOGGED_IN"] = "Not logged in. Please login.";
    ErrorMessages["REGISTER_ERROR"] = "Unable to register. Please try again.";
    ErrorMessages["DUPLICATE_ERROR"] = "already exists with this";
    ErrorMessages["NOT_AUTHORIZED"] = "Not authorized. You do not have access to this ressource";
    ErrorMessages["NOT_AUTHENTICATED"] = "Not authenticated. You must be logged in to perform this action.";
    ErrorMessages["FORBIDDEN"] = "Forbidden. You do not have permission to perform this action.";
    ErrorMessages["TOKEN_EXPIRED"] = "Token expired. Please login again.";
    ErrorMessages["INVALID_OPERATION_NAME"] = "Invalid operation name (Malformed query/mutation name. It must describe the operation and contain the entity name).";
})(ErrorMessages = exports.ErrorMessages || (exports.ErrorMessages = {}));
exports.cookieName = 'rtkn';
exports.passwordLength = 8;
//# sourceMappingURL=constants.js.map