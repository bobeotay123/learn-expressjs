const express = require("express");

const fs = require("fs");

const app = express();

const port = 4000;

app.set("view engine", "pug");
app.set("views", "./views");

var employeesList = [
  {id: 0, name: "Thinh"},
  {id: 1, name: "Giang"},
  {id: 2, name: "Hoang"},
  {id: 3, name: "Son"},
  {id: 4, name: "Khanh"}
]


app.get("/", function (req, res) {
  res.render("search", {employees: employeesList});
});

let keywords;

app.get("/result", function(req, res){
  keywords = req.query.q;
  let matchedEmployees = employeesList.filter(employee => {
    return employee.name.toLowerCase()
                        .indexOf(keywords.toLowerCase()) !== -1;
  });
  res.render("search", {
    employees: matchedEmployees
  });
});

//Start server 
app.listen(port, function(){
  console.log("Server is starting at port " + port);
});