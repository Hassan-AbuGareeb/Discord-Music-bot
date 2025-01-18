require("../controllers/commandsController")
const express = require('express');
const {
    testCommand,
    playCommand,
    stopCommand,
    pauseCommand,
    resumeCommand
 } = require("../controllers/commandsController");
const router = express.Router();

router.get('/', testCommand);
router.post('/play', playCommand);
router.get('/stop', stopCommand);
router.get('/pause', pauseCommand);
router.get('/resume', resumeCommand);

module.exports = router;