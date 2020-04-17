const express = require("express");

const users = require("./Router/users.route");

const port = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/",  users);

app.listen(port, function () {
  console.log("Server is listening at port " + port);
});