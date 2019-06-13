import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import TodoList from './components/TodoList';
import axios from 'axios';

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios.get('http://localhost:5000/todos');
	}

	render() {
		return (
			<div>
				<h1>Hello</h1>
				<Route
					exact
					path="/:id"
					render={props => (
						<TodoList {...props} />
					)}
				/>
			</div>
		);
	}
}

export default withRouter(App);
