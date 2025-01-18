const testCommand = (req, res) =>{
    res.send("America yaaa !")
}

const playCommand = (req, res) => {
    //extract song name
    //search it on spotify
    //get its url
    //download / load it to memory with dl package
    //tell bot to enter channel and play it
    res.send("playing song")
}

const stopCommand = (req, res) => {
    //stop song
    //can't be resumed
    //move bot out?
    res.send("song stopped")
}

const pauseCommand = (req, res) => {
    //only pause if playing a song
    res.send("song paused")
}

const resumeCommand = (req, res) => {
    //resume current song
    res.send("song resumed")
}

module.exports = {
    testCommand,
    playCommand,
    stopCommand,
    pauseCommand,
    resumeCommand
}