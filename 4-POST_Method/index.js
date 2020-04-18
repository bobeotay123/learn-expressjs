const express = require("express");
const app = express();
const port = 9600;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let employees = [
  {id: 0, name: "Truong", phone: 0905},
  {id: 1, name: "Trang", phone: 5555},
  {id: 2, name: "Hong", phone: 5665},
  {id: 3, name: "Minh", phone: 6775}
]

app.get("/user", function(req, res){
  res.render("search", {employees: employees});
});

app.get("/user/search", function(req, res){
  let keywords = req.query.q;
  let matchedEmployees = employees.filter(employee => {
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
  employees.push(req.body);
  res.redirect("/user");
});

app.listen(port, function () {
  console.log("Server is listening at port " + port);
});