import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackContainer from './components/slackApp/SlackContainer';
import Register from './components/login/Register';
import CreateChannel from './components/slackApp/CreateChannel';
import SlackSide from './components/slackApp/SlackSide';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { connectStore } from './context/store';
import My404Page from './components/loading/My404Page';

class App extends React.Component {
	render() {
		// const { loggedIn } = this.props;
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" component={LogContainer} />
					<Route path="/register" component={Register} />
					<Route path="/createchannel" component={CreateChannel} />
					<Route
						path="/slackapp"
						render={() => (
							<React.Fragment>
								<SlackContainer />
								<SlackSide />
							</React.Fragment>
						)}
					/>
					<Route component={My404Page} />
				</Switch>
				<Route />
			</React.Fragment>
		);
	}
}

export default connectStore(App);
