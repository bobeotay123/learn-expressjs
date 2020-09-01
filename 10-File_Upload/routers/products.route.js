const router = require("express").Router();
const {body} = require("express-validator");
const multer = require("multer");

const productsController = require("../controller/products.controller");
const addController = require("../controller/add_pro.controller");

const upload = multer({dest: "./data/images"})

router.get("/", productsController.GET);

router.get("/add", addController.GET);

router.post("/add", 
  [    
    body("name").notEmpty().withMessage("Name cannot be empty"),
    body("description").notEmpty().withMessage("Must give some description"),
    body("price").notEmpty().withMessage("Price must be a number"),
    body("image").notEmpty().withMessage("An image must be uploaded")
  ],
  upload.single("image"),
  addController.POST
);

module.exports = router; 