express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { addUser, getUser, getAllUsers } = require('./data/helpers/userInfoHelper.js');

server.use(express.json());
server.use(morgan('short'));
server.use(cors());

// get one user at a time
server.get('/user/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getUser(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'user not found', err });
	}
});

// get all users
server.get('/users', async (req, res) => {
	try {
		const { users } = req.body;
		const allUsers = await getAllUsers({ users });
		res.status(200).json(allUsers);
	} catch (err) {
		res.status(400).json({ message: 'you done broke something', err });
	}
});

// create a user
server.post('/register', async (req, res) => {
	try {
		const creds = req.body;
		const hash = bcrypt.hashSync(creds.password, 14);
		creds.password = hash;
		const user = await addUser(creds);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'Missing some information', err });
	}
});

const port = 9000;

server.listen(port, (err) => {
	err ? console.log(err) : console.log(`This Port is over ${port}!!!`);
});
