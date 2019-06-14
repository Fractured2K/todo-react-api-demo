import React from 'react';
import { Link } from 'react-router-dom';

const Todo = props => {
	const { id, todo } = props.todo;
	return (
		<div>
			<p>Todo: {todo}</p>
			<Link to={`/edit/${id}`}>
				<button>Edit</button>
			</Link>

			<button onClick={() => props.deleteTodo(id)}>
				Delete
			</button>
		</div>
	);
};

export default Todo;
