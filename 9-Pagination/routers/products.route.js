const router = require("express").Router();
const db = require("../data/db");

router.get("/", (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 8;
  
  let start = (page - 1) * limit;

  res.render("products", {products: db.get("products").drop(start).take(limit).value()});
});

module.exports = router; 