import React, { Component } from 'react';
import axios from 'axios';

class UpdateTodoForm extends Component {
	state = {
		todo: '',
		id: null
	};

	componentDidMount() {
		axios.get(
			`http://localhost:5000/todos/${
				this.props.match.params.id
			}`
		)
			.then(res => {
				console.log(res);
				this.setState({
					todo: res.data.todo,
					id: res.data.id
				});
			})
			.catch(err => console.log(err));
	}

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.updateTodo(this.state);
		this.setState({
			todo: '',
			id: null
		});

		this.props.history.push('/');
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
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

export default UpdateTodoForm;
