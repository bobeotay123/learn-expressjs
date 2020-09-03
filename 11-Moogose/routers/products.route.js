const router = require("express").Router();
const Product = require("../models/products.model");

router.get("/", async (req, res) => {
  let display = await Product.find();
  res.json(display);
});

module.exports = router; 