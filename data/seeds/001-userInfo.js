exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('userInfo').truncate().then(function() {
		// Inserts seed entries
		return knex('userInfo').insert([
			{ username: 'Carlos', password: 'carlos@email.com' },
			{ username: 'Sam', password: 'sam@email.com' },
			{ username: 'Tai', password: 'tai@email.com' }
		]);
	});
};
