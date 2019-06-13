exports.up = function(knex, Promise) {
	return knex.schema.createTable('todos', tbl => {
		// id
		tbl.increments();

		// todo
		tbl.string('todo', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('todos');
};
