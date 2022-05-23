import Joi from 'joi';

export const createMenuSchema = Joi.object({
  name: Joi.string().alphanum().trim().required(),
  products: Joi.array().items(Joi.string().trim()).required(),
});

export const updateMenuSchema = Joi.object({
  name: Joi.string().alphanum().trim(),
  products: Joi.array().items(Joi.string().trim()),
});
