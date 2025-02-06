const { SlashCommandBuilder } = require("discord.js");
const player = require("../../player");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription('resumes the current song'),

    async execute(interaction) {
        if (!!!player) {
            interaction.reply("no player found");
            return;
        }
        player.unpause();
        interaction.reply("song resumed");

    }
}