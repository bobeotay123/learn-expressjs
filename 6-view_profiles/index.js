const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const low = require("lowdb"),
      FileSync = require("lowdb/adapters/FileSync"),
      adapter = new FileSync("./data/db.json"),
      db = low(adapter);

db.defaults({users: []})

function id(){
  return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
}

app.get("/", function(req, res){
  res.redirect("/users")
});

app.get("/users", function(req, res){
  res.render("search", {users: db.get("users").value()});
});

app.get("/users/search", function(req, res){
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

app.get("/users/create", function (req,res) {
  res.render("create");
});

app.post("/users/create", function(req,res){
  let newUser = req.body;
  newUser.id = id();
  db.get("users").push(newUser).write();
  res.redirect("/users");
});

app.get("/users/profile/:id", function (req, res) {
  let id = parseInt(req.params.id);
  let matchedEmployees = db.get("users")
                          .find({id: id})
                          .value();
  res.render("profile", {user: matchedEmployees});
});

app.listen(port, function () {
  console.log("Server is listening at port " + port);
});