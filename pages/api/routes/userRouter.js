const express = require('express');

const UserService  = require('./../services/userService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('./../schemas/userSchema');

const router = express.Router();
const service = new UserService();

//GET
router.get('/', async (req, res) =>{
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error)
  }
});


router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

//POST
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
})

//PATCH
router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

//DELETE
router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);










module.exports = router;
