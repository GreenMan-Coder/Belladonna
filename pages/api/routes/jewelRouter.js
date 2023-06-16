const express = require('express');
const JewelService = require('./../services/jewelService');

const router = express.Router();
const service = new JewelService();

//GET
router.get('/', (req, res) =>{
  const jewelry = service.create();
  res.json(jewelry);
});
router.get('/:id', (req, res) =>{
  const { id } = req.params;

  if(id === '999'){
    res.status(404).json({
      message: 'No se encontro a la verga'
    });
  } else{
    res.status(200).json({
      id,
      product: 'Dieguito',
      price: 10
    });
  }
});

//POST
router.post('/', async (req, res) =>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'creación',
    data: body
  })
})

//PATCH
router.patch('/:id', async (req, res) =>{
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
})

//DELETE
router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'delete',
    id
  })
})










module.exports = router;
