import React, { Component } from 'react';

class TodoForm extends Component {
	state = {
		todo: ''
	};

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	addTodo = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			todo: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.addTodo}>
				<input
					placeholder="Enter todo"
					value={this.state.todo}
					name="todo"
					onChange={this.handleChanges}
				/>
			</form>
		);
	}
}

export default TodoForm;
