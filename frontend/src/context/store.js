import React, { Component } from 'react';
import * as actions from './actions';
import axios from 'axios';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider extends Component {
	state = {
		//register form
		username: '',
		password: '',
		firstname: '',
		lastname: '',
		//login form
		userLog: '',
		passLog: '',
		// creating channel
		newChannel: {
			name: '',
			purpose: ''
		},
		loading: false,
		loggedIn: false,
		sidebar: false,
		userStuff: [],
		channels: [],
		allUsers: [],
		postInfo: []
	};

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
