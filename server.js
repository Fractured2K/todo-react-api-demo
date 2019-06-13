const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

const Todos = require('./models/Todos');

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Sanity Check Passed' });
});

server.get('/todos', async (req, res) => {
	try {
		const todos = await Todos.findAll();

		return res.status(200).json(todos);
	} catch (err) {
		console.log(error);
		res.status(400).json({ message: 'Error trying to get todos' });
	}
});

server.post('/todos', async (req, res) => {
	try {
		if (!req.body) {
			return res.status(400).json({
				message: 'Please make sure to enter a todo!'
			});
		}

		const todo = await Todos.add(req.body);
		return res.status(200).json(todo);
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Error trying to add todo' });
	}
});

server.put('/todos', async (req, res) => {
	try {
		if (!req.body) {
			return res.status(400).json({
				message: 'Please make sure to enter a todo!'
			});
		}

		const { id, todo } = req.body;
		const updatedTodo = await Todos.update(id, todo);
		return res.status(200).json(updatedTodo);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			message: 'Error trying to update todo'
		});
	}
});

server.delete('/todos/:id', async (req, res) => {
	try {
		const id = req.params.id;
		await Todos.remove(id);
		return res.status(200).json({
			message: 'Todo successfully deleted',
			id: req.params.id
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
			message: 'Error trying to update todo'
		});
	}
});

const port = 5000;
server.listen(port, () => console.log(`Server now listening on port ${port}`));
