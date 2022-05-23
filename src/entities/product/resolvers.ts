import * as resolver from '@services/crud.service';
import type {
  Resolvers,
  ProductResult,
  ProductsResult,
  ProductCreatedResult,
  ProductUpdatedResult,
  ProductRemovedResult,
} from '@generated/types';
import { ProductModel } from './model';
import { ErrorMessages, SuccessMessages } from './constants';
import { createProductSchema, updateProductSchema } from './validation';

export const resolvers: Resolvers = {
  Query: {
    getAllProducts: async (_parent, args): Promise<ProductsResult> =>
      resolver.getAll(ProductModel, args, ErrorMessages.PRODUCTS_NOT_FOUND, 'Products', 'ProductNotFound'),
    getProductById: async (_parent, args): Promise<ProductResult> =>
      resolver.getById(ProductModel, args.id, ErrorMessages.PRODUCT_NOT_FOUND, 'ProductBy', 'ProductNotFound'),
    getProductByField: async (_parent, args): Promise<ProductResult> =>
      resolver.getByField(
        ProductModel,
        args.field,
        args.value,
        ErrorMessages.PRODUCT_NOT_FOUND,
        'ProductBy',
        'ProductNotFound',
      ),
  },

  Mutation: {
    createProduct: async (_parent, args): Promise<ProductCreatedResult> =>
      resolver.create(
        ProductModel,
        args.input,
        createProductSchema,
        SuccessMessages.PRODUCT_CREATED,
        'ProductCreated',
        'ProductNotFound',
      ),
    updateProduct: async (_parent, args): Promise<ProductUpdatedResult> =>
      resolver.update(
        ProductModel,
        args.id,
        args.input,
        updateProductSchema,
        SuccessMessages.PRODUCT_UPDATED,
        ErrorMessages.PRODUCT_NOT_FOUND,
        'ProductUpdated',
        'ProductNotFound',
      ),
    removeProduct: async (_parent, args): Promise<ProductRemovedResult> =>
      resolver.remove(
        ProductModel,
        args.id,
        SuccessMessages.PRODUCT_DELETED,
        ErrorMessages.PRODUCT_NOT_FOUND,
        'ProductRemoved',
        'ProductNotFound',
      ),
  },
};
