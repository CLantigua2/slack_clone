exports.up = function(knex, Promise) {
	return knex.schema.createTable('channels', (channel) => {
		channel.increments();
		channel.string('channel', 30).notNullable().unique();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('channels');
};
