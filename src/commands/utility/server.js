const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().
        setName("server")
        .setDescription('info about the server'),
    async execute(interaction) {
        //interation.guild, object with server data
        await interaction.reply(`server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    }
}