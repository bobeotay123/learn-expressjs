const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000

const productApi = require("./routers/products.route");

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("succeeded in connecting")
);

app.use("/api/products", productApi);

let test =[1,2,3,4];

app.get("/", function (req, res) {
  res.json(test);
})

app.listen(port, () => console.log(port));