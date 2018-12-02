import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackContainer from './components/slackApp/SlackContainer';
import Register from './components/login/Register';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { connectStore } from './context/store';

class App extends React.Component {
	render() {
		// const { loggedIn } = this.props;
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={LogContainer} />
					<Route exa path="/clone" component={SlackContainer} />
					<Route exact path="/register" component={Register} />
					<Route render={() => <h1>Not Found</h1>} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default connectStore(App);
