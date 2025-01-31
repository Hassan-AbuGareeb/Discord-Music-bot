const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().
        setName("america-yaaa")
        .setDescription('AMERICA YAAAAA!!'),
    async execute(interaction) {
        //also play soundboard lol
        await interaction.reply('AMERICA YAAAAA!!');
    }
}