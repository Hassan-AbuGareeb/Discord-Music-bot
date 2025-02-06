const { SlashCommandBuilder } = require("discord.js");
const player = require("../../player");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription('pauses the current song'),

    async execute(interaction) {
        if (!!!player) {
            interaction.reply("no player found");
            return;
        }
        player.pause();
        interaction.reply("song paused");

    }
}