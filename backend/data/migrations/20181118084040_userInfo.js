exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.string('username', 128).notNullable().unique();
		tbl.string('password', 225).notNullable();
		tbl.string('firstname', 100).notNullable();
		tbl.string('lastname', 100).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
