const { InteractionType, InteractionResponseType } = require("discord-interactions")

const testCommand = (req, res) => {
    res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            // Fetches a random emoji to send from a helper function
            content: `Test is working!`,
        },
    })
}

//for validation purposes
const pingCommand = (req, res) => {
    const { type } = req.body;

    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }

    return res.status(401).end("invalid request signature");
}

const playCommand = (req, res) => {
    //extract song name
    //search it on spotify
    //get its url
    //download / load it to memory with dl package
    //tell bot to enter channel and play it
    res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            // Fetches a random emoji to send from a helper function
            content: `Now playing songName by artist`,
        },
    })
}

const stopCommand = (req, res) => {
    //stop song
    //can't be resumed
    //move bot out?
    res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            // Fetches a random emoji to send from a helper function
            content: `Song stopped`,
        },
    })
}

const pauseCommand = (req, res) => {
    //only pause if playing a song
    res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            // Fetches a random emoji to send from a helper function
            content: `Song paused`,
        },
    })
}

const resumeCommand = (req, res) => {
    //resume current song
    res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            // Fetches a random emoji to send from a helper function
            content: `Song resumed`,
        },
    })
}

module.exports = {
    testCommand,
    playCommand,
    stopCommand,
    pauseCommand,
    resumeCommand,
    pingCommand
}