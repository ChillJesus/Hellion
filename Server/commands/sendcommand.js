const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('send-command')
		.setDescription('Builds and sends a command to a specific host, or all hosts'),
	async execute(interaction) {
		await interaction.reply('uhhhh');
	}
}