//imports and requried libraries and directories
const express = require("express");
const cors = require("cors");
const bodyParser = require("express").json;
const commandsRoute = require ("./routes/commandsRouter");
const { appendCommandToRoute } = require("./middleware/utilityMiddleWare");
const { verifyKeyMiddleware } = require("discord-interactions");

const app = express();

//enable libraries and register routes on the server app
app.use(cors());
app.use(bodyParser());
app.use("/interactions",verifyKeyMiddleware(process.env.PUBLIC_KEY), appendCommandToRoute, commandsRoute);

module.exports = app;