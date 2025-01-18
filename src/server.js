//imports and requried libraries and directories
const app = require("express")();
const cors = require("cors");
const bodyParser = require("express").json;
const commandsRoute = require ("./routes/commandsRouter");
const { appendCommandToRoute } = require("./middleware/utilityMiddleWare");

//enable libraries and register routes on the server app
app.use(cors());
app.use(bodyParser());
app.use("/interactions", appendCommandToRoute, commandsRoute);



module.exports = app;