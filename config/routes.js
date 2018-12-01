const axios = require('axios');
const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

const { authenticate, generateToken } = require('./middleware.js');

module.exports = (server) => {
	server.post('/api/register', register);
	server.post('/api/login', login);
};

register = (req, res) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds, password, 16);
	creds.password = hash;
	db('userInfo')
		.insert(creds)
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => res.status(400).json(err));
};
