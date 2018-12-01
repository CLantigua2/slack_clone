require('dotenv').config();

const jwt = require('jsonwebtoken');
const jwtKey = process.env.SECRET_KEY;

module.exports = {
	authenticate,
	generateToken
};

// generate webtoken
function generateToken(user) {
	const payload = {
		userId: user.id,
		username: user.username,
		firstname: user.firstname,
		lastname: user.lastname
	};
	const secret = jwtKey;
	const options = {
		expiresIn: '1h'
	};
	return jwt.sign(payload, secret, options);
}

function authenticate(req, res, next) {
	const token = req.get('Authorization');
	if (token) {
		jwt.verify(token, jwtKey, (err, decodedToken) => {
			if (err) return res.status(401).json(err);
			req.decodedToken = decodedToken;
			next();
		});
	} else {
		return res.status(401).json({
			error: 'No token provided, must be set on the Authorization Header'
		});
	}
}
