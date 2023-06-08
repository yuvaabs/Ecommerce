

// PRODUCT SECTION --- A.YUVAGANESH

const mongoose = require('mongoose');

const dburl=process.env.dB_URL

mongoose
  .connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('DB connection error:', err);
  });

const productSchema = new mongoose.Schema({
  productname: String,
  price: Number,
  status:String
});

const ProductModel = mongoose.model('productcollection', productSchema);

module.exports = ProductModel;
