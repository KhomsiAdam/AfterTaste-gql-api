import { Schema, model } from 'mongoose';
import { OrderStatus } from './constants';

import type { OrderEntity } from './interface';

const OrderSchema = new Schema<OrderEntity>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    products: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    productsQuantity: {
      type: [Number],
      default: [],
    },
    menus: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    menusQuantity: {
      type: [Number],
      default: [],
    },
    status: {
      type: String,
      enum: Object.values(OrderStatus),
      required: true,
      default: OrderStatus.PENDING,
    },
  },
  { timestamps: true },
);

export const OrderModel = model<OrderEntity>('Order', OrderSchema);
