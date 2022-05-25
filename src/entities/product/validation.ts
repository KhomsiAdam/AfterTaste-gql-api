import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().trim().required(),
  category: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  images: Joi.array().items(Joi.string().trim()).required(),
  price: Joi.number().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().trim(),
  category: Joi.string().trim(),
  description: Joi.string().trim(),
  images: Joi.array().items(Joi.string().trim()),
  price: Joi.number(),
});
