var express = require('express');
var app = express();
var { host, port } = require('./config.json');
var server;
var service = false;

module.exports = {
	async start() {
		// stop server if already running, acts as a reboot
		if(service) {
			console.log('Closing API server first');
			try { await server.close(); }
			catch(e) { console.log(e); }
		}
		app.get('/', (req, res) => {
			res.send('Hello World');
		});
		app.get('/update*', (req, res) => {
			res.send('This will be the command object for a host machine');
		});
		app.get('/download*', (req, res) => {
			res.send('This will compile the Go executable for the given OS (or fetch it)');
		});
		app.get('/upload*', (req, res) => {
			res.send('This will save the data sent to it to a subdirectory for the host machine');
		});
		server = app.listen(port, function() {
			service = true;
			console.log('API listening on https://%s:%s', host, port);
		});
	},
	async stop() {
		if(service) {
			try {
				await server.close();
				service = false;
				console.log(`API has been shutdown`);
			} catch(e) {
				console.log(e);
			}
		}
	}
};
