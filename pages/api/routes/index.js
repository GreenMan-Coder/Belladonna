const express = require('express');
const JewelryRouter = require('./JewelryRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app){
  //Master route to get control of versions
  const router = express.Router();
  app.use('/api/v1', router);

  //Routing
  router.use('/joyeria', JewelryRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
