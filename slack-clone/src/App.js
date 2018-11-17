import React from 'react';
import './App.css';
import Usernameform from './components/login/UsernameForm';
import LoginNav from './components/navbar/LoginNav';

const App = () => {
	return (
		<React.Fragment>
			<LoginNav />
			<Usernameform />
		</React.Fragment>
	);
};

export default App;
