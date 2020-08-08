const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/", require("./routers/products.route"));

app.listen(port, () => console.log(port));