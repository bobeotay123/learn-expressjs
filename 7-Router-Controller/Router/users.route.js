const express = require("express");
const router = express.Router();

const db = require("../data/db");

const id = require("../ID");

router.get("/", function(req, res){
  res.render("search", {users: db.get("users").value()});
});

router.get("/search", function(req, res){
  let keywords = req.query.q;
  let matchedEmployees = db.get("users").value()
    .filter(user => {
      return user.name.toLowerCase()
                          .indexOf(keywords.toLowerCase()) !== -1;
    });
  res.render("search", {
    users: matchedEmployees
  });
});

router.get("/create", function (req,res) {
  res.render("create");
});

router.post("/create", function(req,res){
  let newUser = req.body;
  newUser.id = id();
  db.get("users").push(newUser).write();
  res.redirect("/");
});

router.get("/profile/:id", function (req, res) {
  let id = parseInt(req.params.id);
  let matchedEmployees = db.get("users")
                          .find({id: id})
                          .value();
  res.render("profile", {user: matchedEmployees});
});

module.exports = router;