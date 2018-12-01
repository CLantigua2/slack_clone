import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackContainer from './components/slackApp/SlackContainer';
import { Route } from 'react-router';

const App = () => {
	return (
		<React.Fragment>
			<Route exact path="/slackapp" component={SlackContainer} />
			<Route path="/" component={LogContainer} />
		</React.Fragment>
	);
};

export default App;
