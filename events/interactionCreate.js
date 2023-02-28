module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

	    const command = interaction.client.commands.get(interaction.commandName);

	    if (!command) return;

		try {
			command.run(interaction);
		} catch (error) {
			console.error(error);
			interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};