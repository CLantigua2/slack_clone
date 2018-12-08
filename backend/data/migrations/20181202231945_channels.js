exports.up = function(knex, Promise) {
	return knex.schema.createTable('channels', (tbl) => {
		tbl.increments();
		tbl.integer('user_id').unsigned().references('id').inTable('users');
		tbl.string('channel', 22).notNullable().unique();
		tbl.text('purpose').nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('channels');
};
