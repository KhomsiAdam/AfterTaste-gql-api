"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customResponse = void 0;
exports.customResponse = {
    auth: (typeName, generatedToken, returnedRole, resultMessage) => ({
        __typename: typeName,
        token: generatedToken,
        role: returnedRole,
        message: resultMessage,
    }),
    entities: (typeName, data, resultMessage = '') => (Object.assign({ __typename: typeName, entities: data }, (resultMessage !== '' && { message: resultMessage }))),
    entity: (typeName, data) => ({
        __typename: typeName,
        entity: data,
    }),
    operation: (typeName, data, resultMessage) => ({
        __typename: typeName,
        entity: data,
        message: resultMessage,
    }),
    message: (typeName, resultMessage) => ({
        __typename: typeName,
        message: resultMessage,
    }),
};
//# sourceMappingURL=customResponse.js.map