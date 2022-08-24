const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_title: String,
  price: Number,
  quantity: Number,
  created_at: Date,
  // to connect the user who place this product by getting his unique id
  added_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
