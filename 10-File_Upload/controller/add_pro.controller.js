const db = require("../data/db");

const { validationResult } = require("express-validator");

module.exports.GET = function (req, res) {
  res.render("add");
}

// module.exports.Validate = () =>;

module.exports.POST = function(req, res) {
  const result = validationResult(req).array();
  if(result.length > 0){
    res.json(result.map(error => error.msg));
    return;
  }
  db.get("products").write(req.body);
  res.redirect("/");
}

