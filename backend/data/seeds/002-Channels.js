exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('channels').truncate().then(function() {
		// Inserts seed entries
		return knex('channels').insert([ { id: 1, channel: 'fsw14' } ]);
	});
};
