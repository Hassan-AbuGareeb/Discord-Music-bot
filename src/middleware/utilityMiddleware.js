const appendCommandToRoute = (req, res, next) =>{
    //access the command name from the request body data
    //append to the url
    // req.url = "/pause"
    next();
}

module.exports = {
    appendCommandToRoute
}
