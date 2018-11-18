exports.up = function(knex, Promise) {
	return knex.schema.createTable('userInfo', (tbl) => {
		tbl.increments();
		tbl.string('name', 255);
		tbl.string('email', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('userInfo');
};
