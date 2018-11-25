import React from 'react';
import './App.css';
import LogContainer from './components/login/LogContainer';
import SlackSide from './components/slackApp/SlackSide';
import { Route } from 'react-router';

const App = () => {
	return (
		<React.Fragment>
			<Route exact path="/slack" component={SlackSide} />
			<Route path="/" component={LogContainer} />
		</React.Fragment>
	);
};

export default App;
