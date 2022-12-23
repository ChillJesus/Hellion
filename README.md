# Hellion
 
**Doesn't work, don't bother.**

# Setting Up The Config
1. Rename `config template.json` to `config.json`
2. Set up a bot in the Discord developer portal
3. Place the bot token, and application id in the config
4. Fill out the host and port, host doesn't really matter yet as it runs locally

# Running The Server

The server acts as both a Discord bot and Express server.
1. Download and install nodejs
2. In the server directory, run `npm install`
3. In the server directory, run `node updateCommands.js`
4. In the server directoy, run `node app.js`
5. Add the bot to a Discord server
6. In the Discord server, run the slash command `/start-server` to start the web api

# Bot Commands
1. `/start-server` starts the nodejs express server for the api, if the server is already running this will reboot it
2. `/stop-server` do I seriously need to explain this?
3. `/ping` gfy

