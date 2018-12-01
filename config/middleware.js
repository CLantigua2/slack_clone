require('dotenv').config();

const jwt = require('jsonwebtoken');
const jwtKey = require(process.env.SECRET_KEY);

module.exports = {
	authenticate,
	generateToken
};

// generate webtoken
generateToken = (user) => {
	const payload = {
		userId: user.id,
		username: user.username,
		firstname: user.firstname,
		lastname: user.lastname,
		dateofbirth: user.dateofbirth
	};
	const secret = jwtKey;
	const options = {
		expiresIn: '1h'
	};
	return jwt.sign(payload, secret, options);
};
