const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setDMPermission(false)
    .setName('hentai')
    .setDescription('Placeholder Text')
    .addStringOption(option =>
      option.setName('tag')
        .setDescription('The Image Tags. (Can Be More!)')
        .setRequired(true)
    ),
  run: async (interaction) => {
    const tag = interaction.options.getString('tag');
    var blacklist = ["loli", "child"]

    const contains2 = blacklist.some(element => {
      if (tag.includes(element)) {
        return true;
      }
      return false;
    });
    if (interaction.channel.nsfw) {
      if (contains2 === true) {
        interaction.reply({ content: "You cannot use this tag because it is blacklisted.", ephemeral: true });
      }
      else {
        const Booru = require('booru');
        Booru.search('gb', tag, { limit: 100, random: true }).then(
          posts => {
            const postlist = posts.filter(function (post) {
              return post.rating === "e";
            });
            const index = Math.floor(Math.random() * postlist.length);
            const post = postlist[index];
            if (posts.length > 10) {
              const blacklisted = blacklist.some(element => {
                if (post.tags.includes(element)) {
                  return true
                }
              });
              if (blacklisted === true) {
                interaction.reply({ content: "Sorry the Bot found an image with a Blacklisted Tag. Please Use the command again.", ephemeral: true });
              } else {
                const img = new EmbedBuilder()
                  .setTimestamp()
                  .setFooter({ text: 'This Command is Powered By: Gelbooru', iconURL: 'https://cdn.discordapp.com/attachments/748825659723218964/981519440598409247/68747470733a2f2f692e696d6775722e636f6d2f764a76594978412e706e67.png' })
                  .setImage(post.file_url);
                interaction.reply({ embeds: [img] }).catch(err => { })
              }
            } else {
              interaction.reply({ content: 'You must provide a valid tag to search for!', ephemeral: true });
            }
          })
      }
    } else {
      interaction.reply({ content: "This Channel does not have NSFW Alowed!", ephemeral: true })
    }
  }
}