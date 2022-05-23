import { Types } from 'mongoose';
import { OrderStatus } from './constants';

export interface OrderEntity {
  user: Types.ObjectId;
  products?: Array<Types.ObjectId>;
  productsQuantity?: Array<number>;
  menus?: Array<Types.ObjectId>;
  menusQuantity?: Array<number>;
  status: OrderStatus;
}
