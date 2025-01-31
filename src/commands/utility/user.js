const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().
        setName("user")
        .setDescription('provide info about the user'),
    async execute(interaction) {
        //interaction.user, access data of the user who ran the command
        //interaction.member, is GuildMember obj, represent user in specific guild
        await interaction.reply(`this command was ran by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}`);
    }
}