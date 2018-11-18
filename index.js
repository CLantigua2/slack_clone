express = require('express');
const server = express();
const knex = require('knex');
const morgan = require('morgan');
const cors = require('cors');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const { addUserInfo, getUserInfo, getAllUsersInfo } = require('./data/helpers/userInfoHelper.js');

server.use(express.json());
server.use(morgan('short'));
server.use(cors());

server.get('/api/userInfo/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await getUserInfo(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ message: 'user not found', err });
	}
});

server.get('/api/userInfo/all', (req, res) => {
	getAllUsersInfo()
		.then((res) => {
			res.status(200).json(res);
		})
		.catch((err) => {
			res.status(400).json({ message: 'Something went wrong, shred all the files', err });
		});
});

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
