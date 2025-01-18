//imports
require("dotenv").config();
const server = require("./server");

//initializations
const port = process.env.PORT || 3000;

const startServer = ()=>{
    server.listen(port, ()=>{
        console.log (`listening on http://localhost:${port}`)
    })
}

startServer();