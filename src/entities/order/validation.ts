import Joi from 'joi';

export const createOrderSchema = Joi.object({
  user: Joi.string().trim().required(),
  products: Joi.array().items(Joi.string().trim()),
  productsQuantity: Joi.array().items(Joi.number()),
  menus: Joi.array().items(Joi.string().trim()),
  menusQuantity: Joi.array().items(Joi.number()),
  status: Joi.string().trim().required(),
});

export const updateOrderSchema = Joi.object({
  user: Joi.string().trim(),
  products: Joi.array().items(Joi.string().trim()),
  productsQuantity: Joi.array().items(Joi.number()),
  menus: Joi.array().items(Joi.string().trim()),
  menusQuantity: Joi.array().items(Joi.number()),
  status: Joi.string().trim(),
});
