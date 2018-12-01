const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const configureRoutes = require('./config/routes');

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (_, res) => {
	res.send('server is live');
});

module.exports = {
	server
};
