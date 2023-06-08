const express = require('express');
const monmodel = require('../config/server');
const ProductModel = require('../config/server');
const router = express.Router();

router.put('/approveproduct/:productId', (req, res) => {
    const productId = req.params.productId;

    ProductModel.findByIdAndUpdate(
      productId,
      { $set: { status: 'approved' } },
      { new: true }
    )
      .then(() => {
        res.json({ message: 'Product approved successfully' });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to approve product' });
      });
});

module.exports = router;
