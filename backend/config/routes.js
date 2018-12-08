const db = require('../data/dbConfig'); // database
const bcrypt = require('bcryptjs');

// import custom middleware
const { authenticate, generateToken } = require('./middleware.js');

// exported routes with their functions
module.exports = (server) => {
	// user helpers
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/users', getUsers);
	server.get('/api/user/:username', getSingleUser);
	// channel helpers
	server.get('/api/channels', getChannels);
	server.post('/api/createchannel', createChannel);
	server.get('/api/channels/:channel', getAChannel);
	// post helpers
	server.post('/api/makepost', makePost);
	server.get('/api/posts', getPosts);
};

//////////////////// USER ROUTES ////////////////////////////////

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
				res.status(200).json({ ...user, token });
			} else {
				this.props.history.push('/');
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
		.first()
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			res.status(500).json({ message: 'There was an error', err });
		});
}

/////////////////// Channel & Comment routes ///////////////////////

function getChannels(req, res) {
	db('channels')
		.select('*')
		.then((channel) => {
			res.status(200).json(channel);
		})
		.catch((err) => res.send(err));
}

function getAChannel(req, res) {
	const { channel } = req.params;
	db('channels')
		.where({ channel: channel })
		.select('id', 'channel', 'purpose')
		.then((channel) => {
			res.json(channel);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error retrieving that channel', err });
		});
}

function createChannel(req, res) {
	const newChannel = req.body;
	db('channels')
		.insert(newChannel)
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error creating that channel', err });
		});
}

////////////// Post functions //////////////
// create a new post
function makePost(req, res) {
	const newPost = req.body;
	db('posts')
		.insert(newPost)
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error creating that post', err });
		});
}

function getPosts(req, res) {
	db('posts')
		.where({ post: post })
		.select('id', 'post', 'created_at')
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch((err) => {
			res.status(404).json({ message: 'Error retrieving posts' }, err);
		});
}
