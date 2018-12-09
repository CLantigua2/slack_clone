import React, { Component } from 'react';
import * as actions from './actions';

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
		newChannelName: '',
		newChannelPurpose: '',
		creating: false,
		loading: false,
		loggedIn: false,
		incorrect: 0,
		userStuff: [],
		channels: [],
		// single channel
		channel: [],
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
		console.log(this.state.userStuff);
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
