express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const { addUserInfo, getUserInfo, getAllUsersInfo } = require('./data/helpers/userInfoHelper.js');

server.use(express.json());
server.use(morgan('short'));
server.use(cors());

// get one user at a time
server.get('/api/userInfo/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getUserInfo(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'user not found', err });
	}
});

// get all users
server.get('/api/userInfo', async (req, res) => {
	try {
		const { users } = req.body;
		const allUsers = await getAllUsersInfo({ users });
		res.status(200).json(allUsers);
	} catch (err) {
		res.status(400).json({ message: 'you done broke something', err });
	}
});

// create a user
server.post('/api/userInfo/create', async (req, res) => {
	try {
		const newUser = req.body;
		const user = await addUserInfo(newUser);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'Missing some information', err });
	}
});

const port = 9000;

server.listen(port, (err) => {
	err ? console.log(err) : console.log(`This Port is over ${port}!!!`);
});
