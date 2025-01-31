const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior, StreamType } = require('@discordjs/voice');
const path = require('path');
const fs = require('fs');
const { createReadStream } = require('node:fs');
const { execSync } = require('child_process');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription('Provide info about the user'),

    async execute(interaction) {
        // Check if user is in a voice channel
        const currentVoiceChannel = interaction.member.voice.channel;

        if (!currentVoiceChannel) {
            await interaction.reply("Please join a voice channel before using this command.");
            return;
        }

        // Defer the reply so we don't hit the "Interaction has already been acknowledged" error
        await interaction.deferReply();

        // Join the voice channel
        const connection = joinVoiceChannel({
            channelId: currentVoiceChannel.id,
            guildId: currentVoiceChannel.guild.id,
            adapterCreator: currentVoiceChannel.guild.voiceAdapterCreator,
        });

        // Create the audio player
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Play,
            }
        });

        // Specify the song path
        const songPath = path.join(__dirname, 'song.ogg');
        console.log(songPath);
        if (!fs.existsSync(songPath)) {
            console.error("Song file not found!");
            await interaction.followUp("Song file not found!");
            connection.destroy();
            return;
        }

        // Create an audio resource using FFmpeg to stream the song
        const resource = createAudioResource(createReadStream(songPath), {
            inputType: StreamType.OggOpus,
        });

        // Subscribe the player to the connection
        connection.subscribe(player);

        // Play the resource
        player.play(resource);

        await interaction.followUp("song")
        // Handle player errors
        player.on('error', (error) => {
            console.error('Error playing audio:', error);
        });
    }
};
