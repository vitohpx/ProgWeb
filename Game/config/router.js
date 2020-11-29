const express = require("express");
const main = require("../app/controllers/main");
const mainController = require("../app/controllers/main")
const router = express.Router();

router.get("/", mainController.index);

router.get("/sobre", mainController.sobre);

router.get("/game",mainController.game);

router.get("/ui",mainController.ui);

module.exports = router;