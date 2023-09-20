const express = require('express');
const bisuService = require('../services/bisuService');


const router = express.Router();
const service = new bisuService();

//GET
router.get('/', async (req, res) =>{
  const data = await service.generate();
  res.json(data);
});










module.exports = router;
