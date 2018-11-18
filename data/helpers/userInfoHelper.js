const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getUserInfo,
	getAllUsersInfo,
	addUserInfo
};

function getUserInfo(id) {
	return db('userInfo').where({ id });
}

function getAllUsersInfo() {
	return db('userInfo');
}

function addUserInfo(user) {
	return db('userInfo').insert(user).then((ids) => ({ id: ids[0] }));
}
