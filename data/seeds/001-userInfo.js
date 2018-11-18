exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('userInfo').truncate().then(function() {
		// Inserts seed entries
		return knex('userInfo').insert([
			{ name: 'Carlos', email: 'carlos@email.com' },
			{ name: 'Sam', email: 'sam@email.com' },
			{ name: 'Tai', email: 'tai@email.com' }
		]);
	});
};
