const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const configureRoutes = require('./config/routes');

// const session = require('express-session'); // brints in session library

const server = express();
const config = {
	origin: 'http://localhost:3000',
	credentials: true
};

server.use(express.json());
server.use(cors(config));
server.use(helmet());
// wires up session management

//test server
server.get('/', (req, res) => {
	res.send('server is live');
});

// pass server to configureRoute function
configureRoutes(server);
module.exports = { server };
