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
exports.remove = exports.update = exports.create = exports.getByField = exports.getById = exports.getAll = void 0;
const mongoose_1 = require("mongoose");
const _helpers_1 = require("../helpers");
const getAll = (EntityModel, options, ErrorMessage, typeNameSuccess, typeNameError) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = options.filter &&
        JSON.stringify(options.filter).replace(/\b(eq|ne|gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    const page = (options.paginate && options.paginate.page) * 1 || 1;
    const limit = (options.paginate && options.paginate.limit) * 1 || 100;
    const skip = (page - 1) * limit;
    const foundEntities = yield EntityModel.find(queryString && JSON.parse(queryString))
        .sort(options.sort && { [options.sort.field]: options.sort.order })
        .skip(skip)
        .limit(limit)
        .lean();
    if (foundEntities && Array.isArray(foundEntities) && foundEntities.length > 0)
        return _helpers_1.customResponse.entities(typeNameSuccess, foundEntities);
    return _helpers_1.customResponse.message(typeNameError, ErrorMessage);
});
exports.getAll = getAll;
const getById = (EntityModel, id, ErrorMessage, typeNameSuccess, typeNameError) => __awaiter(void 0, void 0, void 0, function* () {
    const foundEntity = yield EntityModel.findById(id).lean();
    if (foundEntity)
        return _helpers_1.customResponse.entity(typeNameSuccess, foundEntity);
    return _helpers_1.customResponse.message(typeNameError, ErrorMessage);
});
exports.getById = getById;
const getByField = (EntityModel, field, value, ErrorMessage, typeNameSuccess, typeNameError) => __awaiter(void 0, void 0, void 0, function* () {
    const foundEntity = yield EntityModel.findOne({ [field]: value }).lean();
    if (foundEntity)
        return _helpers_1.customResponse.entity(typeNameSuccess, foundEntity);
    return _helpers_1.customResponse.message(typeNameError, ErrorMessage);
});
exports.getByField = getByField;
const create = (EntityModel, input, entitySchema, SuccessMessage, typeNameSuccess, typeNameError) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = entitySchema.validate(input);
    if (error)
        return _helpers_1.customResponse.message(typeNameError, error.message);
    const createdEntity = new EntityModel(input);
    yield createdEntity.save();
    return _helpers_1.customResponse.operation(typeNameSuccess, createdEntity, SuccessMessage);
});
exports.create = create;
const update = (EntityModel, id, input, entitySchema, SuccessMessage, ErrorMessage, typeNameSuccess, typeNameError) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = entitySchema.validate(input);
    if (error)
        return _helpers_1.customResponse.message(typeNameError, error.message);
    if (!(0, mongoose_1.isValidObjectId)(id))
        return _helpers_1.customResponse.message(typeNameError, 'Invalid id');
    const updatedEntity = yield EntityModel.findOneAndUpdate({ _id: id }, { $set: input }, { new: true }).lean();
    if (updatedEntity)
        return _helpers_1.customResponse.operation(typeNameSuccess, updatedEntity, SuccessMessage);
    return _helpers_1.customResponse.message(typeNameError, ErrorMessage);
});
exports.update = update;
const remove = (EntityModel, id, SuccessMessage, ErrorMessage, typeNameSuccess, typeNameError) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedEntity = yield EntityModel.findOneAndDelete({ _id: id }).lean();
    if (deletedEntity)
        return _helpers_1.customResponse.operation(typeNameSuccess, deletedEntity, SuccessMessage);
    return _helpers_1.customResponse.message(typeNameError, ErrorMessage);
});
exports.remove = remove;
//# sourceMappingURL=crud.service.js.map