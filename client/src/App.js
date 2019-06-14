import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import TodoList from './components/TodoList';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import UpdateTodoForm from './components/UpdateTodoForm';

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios.get('http://localhost:5000/todos')
			.then(res => {
				// console.log(res);
				this.setState({
					todos: res.data
				});
			})
			.catch(err => console.log(err));
	}

	addTodo = todo => {
		axios.post('http://localhost:5000/todos', todo)
			.then(res => {
				this.setState({
					todos: [...this.state.todos, res.data]
				});
			})
			.catch(err => console.log(err));
	};

	editTodo = () => {
		this.setState({
			isEditing: true
		});
	};

	updateTodo = updatedTodo => {
		axios.put('http://localhost:5000/todos', updatedTodo)
			.then(res => {
				/*
				1. Compare filter todo to updated to do, if updated to do matches with to do don't return to do
				*/
				const newTodos = this.state.todos.filter(
					todo => todo.id !== updatedTodo.id
				);

				this.setState({
					todos: [...newTodos, res.data]
				});
			})
			.catch(err => console.log(err));
	};

	deleteTodo = id => {
		axios.delete(`http://localhost:5000/todos/${id}`)
			.then(res => {
				this.setState({
					todos: this.state.todos.filter(
						todo => todo.id !== id
					)
				});
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				<Route
					exact
					path="/"
					render={props => (
						<TodoList
							{...props}
							todos={this.state.todos}
							deleteTodo={
								this.deleteTodo
							}
							selectTodo={
								this.selectTodo
							}
						/>
					)}
				/>

				<Route
					exact
					path="/edit/:id"
					render={props => (
						<UpdateTodoForm
							{...props}
							updateTodo={
								this.updateTodo
							}
						/>
					)}
				/>

				<TodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default withRouter(App);
