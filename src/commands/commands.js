const TEST_COMMAND = {
    name: 'test',
    description: 'testing testing',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2]
}

const PLAY_COMMAND = {
    name: 'play',
    description: 'play a song',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2]
}

const STOP_COMMAND = {
    name: 'stop',
    description: 'stops the current song without resume',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2]
}

const PAUSE_COMMAND = {
    name: 'pasue',
    description: 'pause a song, can be resumed',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2]
}

const RESUME_COMMAND = {
    name: 'resume',
    description: 'resume the current song',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2]
}

const ALL_COMMANDS = {
    TEST_COMMAND,
    PLAY_COMMAND,
    STOP_COMMAND,
    RESUME_COMMAND,
    PAUSE_COMMAND
}

module.exports = {
    ALL_COMMANDS
}