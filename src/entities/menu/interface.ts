import { Types } from 'mongoose';

export interface MenuEntity {
  name: string;
  products: Array<Types.ObjectId>;
}
