const express = require('express');
const monmodel = require('../config/server');
const router = express.Router();

router.delete('/deleteproduct', (req, res) => {
    const name=req.body.productname;
  monmodel.deleteOne({productname:name}).then((data) => {
      res.send("deleted successfully");
    })
    .catch(() => {
      res.send('An error occurred');
    });
});

module.exports = router;
