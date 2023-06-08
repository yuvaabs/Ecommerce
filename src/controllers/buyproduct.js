

// USER SECTION --- S.AYYANKALAI


const express = require('express');
const monmodel = require('../config/server');
const ProductModel = require('../config/server');
const router = express.Router();



router.get('/buyproduct/:productId',  (req, res) => {
    const productId = req.params.productId;
  
    ProductModel.findByIdAndUpdate(
      productId,
      { $set: { status: 'sold' } },
      { new: true }
    )
      .then(() => {
        res.json({ message: 'Product sold successfully' });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to buy product' });
      });
  });


module.exports = router;