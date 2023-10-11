const express = require('express');
const JewelryService = require('../../../backend/services/JewelryService');


const router = express.Router();
const service = new JewelryService();

//BISUTERIA
router.get('/Bisuteria', async (req, res) =>{
  const data = await service.generate();
  res.json(data);
});

//JEWELRY
router.get('/GoldSilver', async (req, res) =>{
  try{
    const data = await service.goldSilver();
    res.json(data);
  } catch (error){
    console.error("Error al traer imagenes oro y plata")
  }
})
module.exports = router;
