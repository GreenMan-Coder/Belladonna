const express = require('express');
const bisuRouter = require('./bisuRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app){
  //Master route to get control of versions
  const router = express.Router();
  app.use('/api/v1', router);

  //Routing
  router.use('/bisuteria', bisuRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
