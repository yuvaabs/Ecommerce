const express = require('express');
const app = express();
app.use(express.json());

const productpost = require('./src/controllers/postproduct');
const getproduct = require('./src/controllers/getproduct');
const deleteproduct = require('./src/controllers/deleteproduct');
const approveproduct = require('./src/controllers/approveproduct');
const adminapproveproduct = require('./src/controllers/getapproveproduct');
const userproduct = require('./src/controllers/buyproduct');





app.use('/api', productpost);
app.use('/api', getproduct);
app.use('/api', deleteproduct);
app.use('/api', approveproduct);
app.use('/api', adminapproveproduct);
app.use('/api', userproduct);





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});