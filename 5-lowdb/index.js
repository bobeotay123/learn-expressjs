const express = require("express");
const app = express();
const port = 9600;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const low = require("lowdb"),
      FileSync = require("lowdb/adapters/FileSync"),
      adapter = new FileSync("./data/db.json"),
      db = low(adapter);

db.defaults({employees: []})

app.get("/user", function(req, res){
  res.render("search", {employees: db.get("employees").value()});
});

app.get("/user/search", function(req, res){
  let keywords = req.query.q;
  let matchedEmployees = db.get("employees").value()
    .filter(employee => {
      return employee.name.toLowerCase()
                          .indexOf(keywords.toLowerCase()) !== -1;
    });
  res.render("search", {
    employees: matchedEmployees
  });
});

app.get("/user/create", function (req,res) {
  res.render("create");
})

app.post("/user/create", function(req,res){
  db.get("employees").push(req.body).write();
  res.redirect("/user");
});

app.listen(port, function () {
  console.log("Server is listening at port " + port);
});