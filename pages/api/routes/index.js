const express = require('express');
const JewelryRouter = require('./JewelryRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/joyeria', JewelryRouter);
}

module.exports = routerApi;
