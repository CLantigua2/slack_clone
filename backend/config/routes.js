const db = require('../data/dbConfig'); // database
const bcrypt = require('bcryptjs');
require('dotenv').config();
const session = require('express-session'); // brints in session library
const knexSessionStore = require('connect-session-knex')(session);
const sessSecret = process.env.SESSION_SECRET;
const sessName = process.env.SESSION_NAME;

// import custom middleware
const restricted = require('./middleware.js');

// exported routes with their functions
module.exports = (server) => {
	server.use(session(sessionConfig));
	// user helpers
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/logout', logout);
	server.get('/api/users', getUsers);
	server.get('/api/user/:username', getSingleUser);
	// channel helpers
	server.get('/api/channels', getChannels);
	server.post('/api/createchannel', createChannel);
	server.get('/api/channels/:channel', getAChannel);
	// post helpers
	server.post('/api/makepost', makePost);
	server.get('/api/posts', getPosts);
	server.get('/api/post/:id', getPost);
};

///////////// session config ///////////////////////
const sessionConfig = {
	secret: `${process.env.SESSION_SECRET}`,
	name: `${process.env.SESSION_NAME}`, // defaults to connect.sid
	httpOnly: true, // JS can't access, only https
	resave: false,
	saveUninitialized: false, // has something to do with foreign laws
	cookie: {
		secure: false, // over http(S) in production change to true
		maxAge: 1000 * 60 * 5
	},
	store: new knexSessionStore({
		// creates memcache
		tablename: 'sessions', // session table name
		sidfiledname: 'sid', //session field name
		knex: db, // what database you want to knex to use
		createtable: true, // have the library create the table if there isn't one
		clearInterval: 1000 * 60 * 60 // clear every hour
	})
};

//////////////////// USER ROUTES ////////////////////////////////

// for user registration
function register(req, res) {
	const creds = req.body;
	// encrypt user password
	const hash = bcrypt.hashSync(creds.password, 10);
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
				req.session.id = user.id;
				res.status(200).json({ ...user });
			} else {
				// this.props.history.push('/');
				res.status(401).json({ message: 'you shall not pass!!' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'There was an error', err });
		});
}

// logout
function logout(req, res) {
	if (req.session) {
		req.session.destroy((err) => {
			if (err) {
				res.send('you can never logout');
			} else {
				res.send('you have logged out');
			}
		});
	}
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
	if (newChannel.channel.length > 22) {
		res.status(500).json({ message: 'too many characters in channel name' });
	} else {
		db('channels')
			.insert(newChannel)
			.then((ids) => {
				res.status(201).json(ids);
			})
			.catch((err) => {
				res.status(500).json({ message: 'Error creating that channel', err });
			});
	}
}

////////////// Post functions //////////////
// create a new post
function makePost(req, res) {
	const newPost = req.body;
	db('posts')
		.insert(newPost)
		.then((ids) => {
			res.status(201).json({ id: ids[0] });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error creating that post', err });
		});
}

function getPosts(req, res) {
	db('posts')
		.select('id', 'post', 'created_at')
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch((err) => {
			res.status(404).json({ message: 'Error retrieving posts' }, err);
		});
}

function getPost(req, res) {
	const { id } = req.params;
	db('posts')
		.where({ id })
		.select('id', 'post', 'created_at')
		.then((post) => {
			res.status(200).json(post);
		})
		.catch((err) => {
			res.status(404).json({ message: 'Error post does not exist' }, err);
		});
}
