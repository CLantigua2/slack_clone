const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

const { authenticate, generateToken } = require('./middleware.js');

module.exports = (server) => {
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/users', authenticate, getUsers);
};

// for user registration
function register(req, res) {
	const creds = req.body;
	const hash = bcrypt.hashSync(creds.password, 16);
	creds.password = hash;
	db('users')
		.insert(creds)
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => res.status(400).json(err));
}

// for user login
function login(req, res) {
	// implement user login
	const creds = req.body;
	db('users')
		.where({ username: creds.username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				const token = generateToken(user);
				res.status(200).json({ message: 'Welcome!', token });
			} else {
				res.status(401).json({ message: 'you shall not pass!!' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'There was an error', err });
		});
}

// for getting a list of users
function getUsers(req, res) {
	const users = req.body;
	db('users')
		.select('username', 'firstname', 'lastename', 'age')
		.then((folks) => {
			res.status(200).json({ users });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error Fetching Users', error: err });
		});
}
