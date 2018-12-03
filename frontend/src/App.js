import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackContainer from './components/slackApp/SlackContainer';
import Register from './components/login/Register';
import CreateChannel from './components/slackApp/CreateChannel';
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
					<Route exact path="/slackapp" component={SlackContainer} />
					<Route path="/register" component={Register} />
					<Route path="/slackapp/createchannel" component={CreateChannel} />
					<Route render={() => <h1>Not Found</h1>} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default connectStore(App);
