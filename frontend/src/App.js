import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackContainer from './components/slackApp/SlackContainer';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { connectStore } from './context/store';

const App = () => {
	// const { loggedIn } = this.props;
	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={LogContainer} />
				<Route path="/slackapp" component={SlackContainer} />
				<Route render={() => <h1>Not Found</h1>} />
			</Switch>
		</React.Fragment>
	);
};

export default connectStore(App);
