



const express = require('express');
const monmodel = require('../config/server');
const router = express.Router();

router.get('/getproduct', (req, res) => {
  monmodel.find({}).then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.send('An error occurred');
    });
});

module.exports = router;
