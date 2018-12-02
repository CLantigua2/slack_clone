const db = require('../data/dbConfig'); // database
const bcrypt = require('bcryptjs');

// import custom middleware
const { authenticate, generateToken } = require('./middleware.js');

// exported routes with their functions
module.exports = (server) => {
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/users', authenticate, getUsers);
	server.get('/api/user/:id', getSingleUser);
};

// for user registration
function register(req, res) {
	const creds = req.body;
	// encrypt user password
	const hash = bcrypt.hashSync(creds.password, 16);
	// maintain the encrypted password
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
		// match username in db with input username
		.where({ username: creds.username })
		.first()
		.then((user) => {
			// compare password in db with input password
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				// give the user a token to be used for access in cookie
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
	db('users')
		// show user id, username, first and lastname ONLY
		.select('id', 'username', 'firstname', 'lastname')
		.then((users) => {
			res.json(users);
		})
		.catch((err) => res.send(err));
}

function getSingleUser(req, res) {
	db('users')
		.select('id', 'username', 'firstname', 'lastname')
		.where({ username: creds.username })
		.first((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			res.status(500).json({ message: 'There was an error', err });
		});
}
