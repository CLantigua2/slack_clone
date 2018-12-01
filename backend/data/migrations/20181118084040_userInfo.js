exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (user) => {
		user.increments();
		user.string('username', 128).notNullable().unique();
		user.string('password', 225).notNullable();
		user.string('firstname', 100).notNullable();
		user.string('lastname', 100).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
