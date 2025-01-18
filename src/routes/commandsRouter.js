//imports
require("../controllers/commandsController")
const express = require('express');
const {
    testCommand,
    playCommand,
    stopCommand,
    pauseCommand,
    resumeCommand,
    pingCommand
} = require("../controllers/commandsController");

//init
const router = express.Router();

//routes
router.post('/', pingCommand);
router.post('/test', testCommand);
router.post('/play', playCommand);
router.post('/stop', stopCommand);
router.post('/pause', pauseCommand);
router.post('/resume', resumeCommand);

module.exports = router;