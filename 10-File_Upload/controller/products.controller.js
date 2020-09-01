const db = require("../data/db");

module.exports.GET = (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 9;
  
  let start = (page - 1) * limit;

  res.render("products", {products: db.get("products").drop(start).take(limit).value()});
}
