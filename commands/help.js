const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Gives you the Help Menu'),
	run: async (interaction) => {
		const img = new EmbedBuilder()
            .setTitle("Help")
            .setDescription("Current Version: 1.1.3\n\nCreated By: Comrade Medic#5545 | mrpekr.github.com\n\nNote: Commands that are Powered By Gelbooru are limited to only 100 imgs at a time this might lead to seeing 1 img mutiple times, until there are new on the site.\n")
            .addFields({ name: "Hentai", value: "/hentai <category>", inline: true })
            .addFields({ name: "Random", value: "/random", inline: true})
            .addFields({ name: "Help", value: "/help", inline: true})
            .setThumbnail("https://cdn.discordapp.com/avatars/915868410905247814/6d0b2a4ebe2e14f4797f8d2f86affc63.png");
        await interaction.reply({ embeds: [img] });
	},
};
