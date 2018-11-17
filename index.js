express = require('express');
const server = express();
const knex = require('knex');
const morgan = require('morgan');
const cors = require('cors');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());
server.use(morgan('short'));
server.use(cors());

const port = 9000;

server.listen(port, (err) => {
	err ? console.log(err) : console.log(`This Port is over ${port}!!!`);
});
