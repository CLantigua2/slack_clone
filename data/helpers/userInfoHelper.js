const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getUser,
	getAllUsers,
	registerUser,
	removeUser,
	logIn
};

function getUser(id) {
	return db('userInfo').where({ id });
}

function getAllUsers() {
	return db('userInfo').select('id', 'username');
}

function registerUser(user) {
	return db('userInfo').insert(user).then((ids) => ({ id: ids[0] }));
}

function removeUser(id) {
	return db('userInfo').delete(user).where({ id });
}

function logIn() {
	return db('userInfo');
}
