import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackContainer from './components/slackApp/SlackContainer';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { connectStore } from './context/store';

class App extends React.Component {
	render() {
		// const { loggedIn } = this.props;
		return (
			<React.Fragment>
				<Switch>
					{this.props.loggedIn === false ? (
						<Route exact path="/" component={LogContainer} />
					) : (
						<Route path="/" component={SlackContainer} />
					)}

					<Route render={() => <h1>Not Found</h1>} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default connectStore(App);
