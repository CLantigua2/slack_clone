module.exports = {
	restricted
};

// generate webtoken
function restricted(req, res, next) {
	// if logged in
	if (req.session && req.session.userId) {
		// they're logged in, go ahead and provide access
		next();
	} else {
		// bounce them
		res.status(401).json({ message: 'Invalid credentials' });
	}
}
