const express = require('express');

const router = express.Router();


router.get('/', (req, res) =>{
  res.json({
    name: 'joya 2',
    price: 1000
  });
});

module.exports = router;
