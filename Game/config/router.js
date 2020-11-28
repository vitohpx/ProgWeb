const express = require("express");
const main = require("../app/controllers/main");
const mainController = require("../app/controllers/main")
const router = express.Router();

router.get("/", mainController.index);

router.get("/sobre", mainController.sobre);

module.exports = router;