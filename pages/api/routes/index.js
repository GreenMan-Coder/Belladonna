const express = require('express');
const jewelRouter = require('./jewelRouter');
const categoriesRouter = require('./categoriesRouter');
const userRouter = require('./userRouter');

function routerApi(app){
  //Master route to get control of versions
  const router = express.Router();
  app.use('/api/v1', router);

  //Routing
  router.use('/jewelry', jewelRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
