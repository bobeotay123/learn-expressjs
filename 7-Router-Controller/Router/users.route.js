
const express = require("express");

const Controller = require("../Controller/users.controller")

const router = express.Router();

router.get("/", Controller.index);

router.get("/search", Controller.search);

router.get("/create", Controller.create.GET_Create);

router.post("/create", Controller.create.POST_Create);

router.get("/profile/:id", Controller.profileViewer);

module.exports = router;