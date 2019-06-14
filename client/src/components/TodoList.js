import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	const { todos, deleteTodo, selectTodo } = props;
	return (
		<div>
			{todos.map(todo => (
				<Todo
					todo={todo}
					deleteTodo={deleteTodo}
					selectedTodo={selectTodo}
					key={todo.id}
				/>
			))}
		</div>
	);
};

export default TodoList;
