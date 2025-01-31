require("dotenv").config();
const { REST, Routes } = require('discord.js');

const rest = new REST().setToken(process.env.TOKEN);

const commandsIDs = [
]

for (const commandID of commandsIDs) {
    console.log(commandID)
    rest.delete(Routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID, commandID))
        .then(() => console.log('Successfully deleted guild command'))
        .catch(console.error);
}

