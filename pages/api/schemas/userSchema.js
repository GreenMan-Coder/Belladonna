const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(1);
const email = Joi.string().email();
const password = Joi.string().min(5);
//const role = Joi.string().min(5);


// User log
const userLog = Joi.object({
  name: name.required(),
  password: password.required()
});

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  //role: role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  //role: role,
});

const getUserSchema = Joi.object({
  id: Joi.number().integer().required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, userLog }
