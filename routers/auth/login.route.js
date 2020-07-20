const router = require('express').Router();

const login = require("../../controllers/auth/login.controller");

router.get("/", login.GET);
router.post("/", login.POST);

module.exports = router;