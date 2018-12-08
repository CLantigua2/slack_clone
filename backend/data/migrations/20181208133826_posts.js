exports.up = function(knex, Promise) {
	return knex.schema.createTable('posts', (tbl) => {
		tbl.increments();
		tbl.integer('channel_id').unsigned().references('id').inTable('channels');
		tbl.text('post').notNullable();
		tbl.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('posts');
};
