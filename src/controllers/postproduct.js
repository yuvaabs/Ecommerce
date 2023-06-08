
// PRODUCT SECTION --- A.YUVAGANESH

const express = require('express');
const monmodel = require('../config/server');
const router = express.Router();

router.post('/productpost', (req, res) => {
  const { productname, price } = req.body;
  const data = new monmodel({
    productname: productname,
    price: price,
    status:'pending'
  });
  
  data.save().then((value) => {
      res.send(value);
    })
    .catch(() => {
      res.send('An error occurred');
    });
});

module.exports = router;
