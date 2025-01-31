const { getVoiceConnection } = require('@discordjs/voice');

const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior, StreamType } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stop")
        .setDescription('Stops the song playback'),
    async execute(interaction) {
        // Check if user is in a voice channel
        const currentVoiceChannel = interaction.member.voice.channel;

        if (!currentVoiceChannel) {
            await interaction.reply("Please join a voice channel before using this command.");
            return;
        }

        const connection = getVoiceConnection(currentVoiceChannel.guild.id);
        connection.destroy();

        interaction.reply("bot leaving ")
    }
};
