const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const configureRoutes = require('./config/routes');
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

//test server
server.get('/', (req, res) => {
	res.send('server is live');
});

// pass server to configureRoute function
configureRoutes(server);
module.exports = { server };
