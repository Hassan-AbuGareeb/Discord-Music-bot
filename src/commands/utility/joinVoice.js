const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().
        setName("voice")
        .setDescription('joins general voice channel'),
    async execute(interaction) {
        const currentVoiceChannel = interaction.member.voice.channel;

        if (!currentVoiceChannel) {
            await interaction.reply("Please join a voice channel before using this command")
        }
        //create a deffered reply to wait while searching

        //search for song

        //join voice and play song
        const connection = joinVoiceChannel({
            channelId: currentVoiceChannel.id,
            guildId: currentVoiceChannel.guild.id,
            adapterCreator: currentVoiceChannel.guild.voiceAdapterCreator,
        });

        //change the reply message
        interaction.reply(`Joined voice channel ${currentVoiceChannel.name}`)
    }
}

