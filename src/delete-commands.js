require("dotenv").config();
const { REST, Routes } = require('discord.js');

const rest = new REST().setToken(process.env.TOKEN);

const commandsIDs = [
    '1334649158870503475',
    '1334646826988474399',
    '1335033184919748618',
    '1334988249936171058',
    '1334668921655001222'
]

for (const commandID of commandsIDs) {
    rest.delete(Routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID, commandID))
        .then(() => console.log('Successfully deleted guild command'))
        .catch(console.error);
}

