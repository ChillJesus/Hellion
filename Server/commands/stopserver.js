const { SlashCommandBuilder } = require('discord.js');
const server = require('../server.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop-server')
		.setDescription('Stops the server for the api'),
	async execute(interaction) {
		server.stop();
		await interaction.reply('API Server has been stopped');
	}
}