const axios = require('axios');
const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

const { authenticate, generateToken } = require('./middleware.js');

module.exports = (server) => {
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/users', getUsers);
};

// for user registration
register = (req, res) => {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds, password, 16);
	creds.password = hash;
	db('users')
		.insert(creds)
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => res.status(400).json(err));
};

// for user login
login = (req, res) => {
	const creds = req.body;
	db('users').insert(creds).then((user) => {
		if (user && bcrypt.compareSync(creds.password, user.password)) {
			const token = generateToken(user);
			res.status(201).json({ message: 'Welcome', token });
		} else {
			res.status(401).json({ message: 'no token' });
		}
	});
};

// for getting a list of users
getusers = (req, res) => {
	const users = req.body;
	db('users').select('username', 'firstname', 'lastename', 'age');
};
