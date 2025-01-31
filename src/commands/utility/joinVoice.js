const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().
        setName("voice")
        .setDescription('joins general voice channel')
        .addChannelOption(option =>
            option.setName("channel").setDescription("choose channel").addChannelTypes(ChannelType.GuildVoice)
        ),
    async execute(interaction) {
        const channel = interaction.options.getChannel("channel");
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

    }
}

