const express = require('express');
const monmodel = require('../config/server');
const ProductModel = require('../config/server');
const router = express.Router();

router.get('/adminapprovedproducts',(req, res) => {
    ProductModel.find({ status: 'approved' })
      .then((products) => {
        res.json(products);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products' });
      });
  });

module.exports = router;