express = require('express');
const server = express();
const knex = require('knex');
const morgan = require('morgan');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());
server.use(morgan('short'));

server.listen(9000, () => console.log('This port is OVER 9000!!!'));
