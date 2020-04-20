const express = require("express");

const usersRouter = require("./Router/users.route");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get("/", (req, res) => {
  res.redirect("/users")
});

app.use("/users", usersRouter);


app.listen(port, function () {
  console.log("Server is listening at port " + port);
});