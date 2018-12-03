exports.up = function(knex, Promise) {
	return knex.schema.createTable('channels', (channel) => {
		channel.increments();
		channel.string('channel', 22).notNullable().unique();
		channel.text('purpose');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('channels');
};
