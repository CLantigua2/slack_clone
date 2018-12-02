import React, { Component } from 'react';
import * as actions from './actions';
import axios from 'axios';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider extends Component {
	state = {
		username: '',
		password: '',
		firstname: '',
		lastname: '',
		loading: false,
		loggedIn: false,
		sidebar: false,
		userStuff: [],
		allUsers: [],
		postInfo: []
	};

	componentDidMount() {
		setInterval(() => {
			const endpoint = 'http://localhost:9000/api/';

			// gets a list of all the users in the server
			axios
				.get(`${endpoint}users`)
				.then((res) => {
					this.setState({ allUsers: res.data });
				})
				.catch((err) => {
					console.log(err);
				});
		}, 5000);
	}

	attachMethods = (data_obj) => {
		return Object.keys(data_obj).reduce((obj, prop) => {
			obj[prop] = data_obj[prop].bind(this);
			return obj;
		}, {});
	};

	render() {
		return (
			<Context.Provider
				value={{
					...this.state,
					...this.attachMethods(actions)
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const connectStore = (DependentComponent) => {
	return class extends Component {
		render() {
			return <Consumer>{(context) => <DependentComponent {...context} />}</Consumer>;
		}
	};
};
