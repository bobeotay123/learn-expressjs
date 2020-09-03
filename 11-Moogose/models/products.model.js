const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String
});

let Product = mongoose.model("products", productSchema, "products");

module.exports = Product;