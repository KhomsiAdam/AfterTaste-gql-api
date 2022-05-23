import { Schema, model } from 'mongoose';

import type { MenuEntity } from './interface';

const MenuSchema = new Schema<MenuEntity>(
  {
    name: {
      type: String,
      required: true,
    },
    products: {
      type: [Schema.Types.ObjectId],
      required: true,
    },
  },
  { timestamps: true },
);

export const MenuModel = model<MenuEntity>('Menu', MenuSchema);
