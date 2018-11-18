import React from 'react';
import './App.css';
import Usernameform from './components/login/UsernameForm';
import LoginNav from './components/navbar/LoginNav';
import BodyContent from './components/login/BodyContent';

const App = () => {
	return (
		<React.Fragment>
			<LoginNav />
			<Usernameform />
			<BodyContent />
		</React.Fragment>
	);
};

export default App;
