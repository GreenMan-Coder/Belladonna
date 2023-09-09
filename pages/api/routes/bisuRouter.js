const express = require('express');
const BisuService = require('../services/bisuService');


const router = express.Router();
const service = new BisuService();

//GET
router.get('/', async (req, res) =>{
  const bisuteria = await service.generate();
  res.json(bisuteria);
});










module.exports = router;
