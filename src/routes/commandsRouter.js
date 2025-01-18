require("../controllers/commandsController")
const express = require('express');
const { GetCommand } = require("../controllers/commandsController");
const router = express.Router();

router.get('/', GetCommand)

module.exports = router;