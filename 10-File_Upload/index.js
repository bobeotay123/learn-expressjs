const express = require("express");

const app = express();
const port = 4000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/", require("./routers/products.route"));

app.listen(port, () => console.log(port));