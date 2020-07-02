const express = require('express');
const bodyParser = require("body-parser");

const loginRoute = require("./routers/auth/login.route");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => res.redirect("/login"));

app.use("/login", loginRoute);

app.listen(port, () => console.log(port));