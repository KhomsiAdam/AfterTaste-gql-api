import * as resolver from '@services/crud.service';
import type {
  Resolvers,
  OrderResult,
  OrdersResult,
  OrderCreatedResult,
  OrderUpdatedResult,
  OrderRemovedResult,
} from '@generated/types';
import { OrderModel } from './model';
import { ErrorMessages, SuccessMessages } from './constants';
import { createOrderSchema, updateOrderSchema } from './validation';

export const resolvers: Resolvers = {
  Query: {
    getAllOrders: async (_parent, args): Promise<OrdersResult> =>
      resolver.getAll(OrderModel, args, ErrorMessages.ORDERS_NOT_FOUND, 'Orders', 'OrderNotFound'),
    getOrderById: async (_parent, args): Promise<OrderResult> =>
      resolver.getById(OrderModel, args.id, ErrorMessages.ORDER_NOT_FOUND, 'OrderBy', 'OrderNotFound'),
    getOrderByField: async (_parent, args): Promise<OrderResult> =>
      resolver.getByField(
        OrderModel,
        args.field,
        args.value,
        ErrorMessages.ORDER_NOT_FOUND,
        'OrderBy',
        'OrderNotFound',
      ),
  },

  Mutation: {
    createOrder: async (_parent, args): Promise<OrderCreatedResult> =>
      resolver.create(
        OrderModel,
        args.input,
        createOrderSchema,
        SuccessMessages.ORDER_CREATED,
        'OrderCreated',
        'OrderNotFound',
      ),
    updateOrder: async (_parent, args): Promise<OrderUpdatedResult> =>
      resolver.update(
        OrderModel,
        args.id,
        args.input,
        updateOrderSchema,
        SuccessMessages.ORDER_UPDATED,
        ErrorMessages.ORDER_NOT_FOUND,
        'OrderUpdated',
        'OrderNotFound',
      ),
    removeOrder: async (_parent, args): Promise<OrderRemovedResult> =>
      resolver.remove(
        OrderModel,
        args.id,
        SuccessMessages.ORDER_DELETED,
        ErrorMessages.ORDER_NOT_FOUND,
        'OrderRemoved',
        'OrderNotFound',
      ),
  },
};
