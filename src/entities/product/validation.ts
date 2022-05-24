import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().alphanum().trim().required(),
  category: Joi.string().alphanum().trim().required(),
  description: Joi.string().alphanum().trim().required(),
  images: Joi.array().items(Joi.string().trim()).required(),
  price: Joi.number().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().alphanum().trim(),
  category: Joi.string().alphanum().trim(),
  description: Joi.string().alphanum().trim(),
  images: Joi.array().items(Joi.string().trim()),
  price: Joi.number(),
});
