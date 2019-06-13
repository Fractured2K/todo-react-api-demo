const db = require('../database/dbConfig');

module.exports = {
	add,
	findAll,
	findById,
	remove,
	update
};

async function add(todo) {
	const [id] = await db('todos').insert(todo);

	return findById(id);
}

function findAll() {
	return db('todos');
}

function findById(id) {
	return db('todos')
		.where({ id })
		.first();
}

function remove(id) {
	console.log(id);
	return db('todos')
		.where({ id })
		.del();
}

async function update(id, todo) {
	console.log(id, todo);
	await db('todos')
		.where({ id })
		.update({ todo });

	return findById(id);
}
