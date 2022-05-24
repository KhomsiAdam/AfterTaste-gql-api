import { Schema, model } from 'mongoose';

import type { ProductEntity } from './interface';

const ProductSchema = new Schema<ProductEntity>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const ProductModel = model<ProductEntity>('Product', ProductSchema);
