const { ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity(`Moans on ${client.guilds.cache.size} servers`, { type: ActivityType.Listening});
	}
};
