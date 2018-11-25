exports.up = function(knex, Promise) {
	return knex.schema.createTable('userInfo', (tbl) => {
		tbl.increments();
		tbl.string('username', 255);
		tbl.string('password', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('userInfo');
};
