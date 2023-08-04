const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

// creation schema
const createProductSchema = Joi.object({
  name: name.required(), //for the creation is required
  price: price.required(),
});

//Update product schema
const updateProductSchema = Joi.object({
  name: name,
  price: price,
});


//ID validation in the correct format
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema}
