const { SlashCommandBuilder, ChannelType } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder().
        setName("pick_number")
        .setDescription('pick a number from 1 - 5')
        .addStringOption(option =>
            option.setName("1").setDescription("one"))
        .addChannelOption(option =>
            option.setName("channel").setDescription("choose channel").addChannelTypes(ChannelType.GuildVoice)
        ),
    async execute(interaction) {
    }
}