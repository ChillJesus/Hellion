const { SlashCommandBuilder } = require('discord.js');
const { host } = require('../config.json');
const server = require('../server.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start-server')
		.setDescription('(re)Starts the server for the api'),
	async execute(interaction) {
		server.start();
		await interaction.reply(`Server started on https://${host}`);
	}
}