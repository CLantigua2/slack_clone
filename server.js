express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const { registerUser, getUser, getAllUsers, removeUser, logIn } = require('./data/helpers/userInfoHelper.js');
const session = require('express-session');
const server = express();

server.use(express.json());
server.use(morgan('short'));
server.use(cors());
server.use(helmet());

const sessionConfig = {
	secret: 'Random.Weird.Things.That.I.Tell.My.Dog',
	name: 'banana', // defaults to connect.sid
	httpOnly: true, // JS can't access, only https
	resave: false,
	saveUninitialized: false, // laws ?
	cookie: {
		secure: false, // over http(S) in production change to true
		maxAge: 1000 * 60 * 30
	}
};

server.use(session(sessionConfig));

restricted = (req, res, next) => {
	if (req.session && req.session.username) {
		next();
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
};

////////////// test server
server.get('/', (req, res) => {
	res.send('Server is running');
});

////////////// get all users
server.get('/users', async (req, res) => {
	try {
		const { users } = req.body;
		const allUsers = await getAllUsers({ users });
		res.status(200).json(allUsers);
	} catch (err) {
		res.status(400).json({ message: 'you done broke something', err });
	}
});

////////////// get one user at a time
server.get('/users/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getUser(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'user not found', err });
	}
});

/////////////// register a user
server.post('/register', restricted, async (req, res) => {
	try {
		const creds = req.body;
		const hash = bcrypt.hashSync(creds.password, 14);
		creds.password = hash;
		const user = await registerUser(creds);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'Missing some information', err });
	}
});

/////////////// remove a user
server.delete('/delete/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteUser = await removeUser({ id });
		res.status(200).json(deleteUser);
	} catch (err) {
		res.status(400).json({ message: 'you done broke something' });
	}
});

///////////// login a user
server.post('/login', restricted, (req, res) => {
	const creds = req.body;
	logIn()
		.where({ username: creds.username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
				req.session.username = user.username;
				res.status(200).json({ message: `Welcome ${user.username}` });
			} else {
				res.status(401).json({ message: 'Invalid credentials!' });
			}
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
});

const port = 9000;

server.listen(port, (err) => {
	err ? console.log(err) : console.log(`This Port is over ${port}!!!`);
});
