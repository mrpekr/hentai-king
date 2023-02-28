const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const reddit = require('reddit.images');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('Gives Random NSFW (Hentai) Picture')
        .setDMPermission(false),
	run: async (interaction) => {
        if (interaction.channel.nsfw) {
            reddit.FetchSubredditPost({ subreddit: 'hentai' }).then((data) => {
                const img = new EmbedBuilder()
                    .setTimestamp()
                    .setFooter({ text: 'This Command is Powered By: r/Hentai', iconURL: 'https://styles.redditmedia.com/t5_2qj7g/styles/communityIcon_54w7jgiq52a71.png' })
                    .setImage(data.image);
                interaction.reply({ embeds: [img] });
            });
	} else {
        interaction.reply({ content: "This Channel does not have NSFW Alowed!", ephemeral: true });
    }
},
};