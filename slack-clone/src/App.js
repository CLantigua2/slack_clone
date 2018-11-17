import React, { Component } from 'react';
import './App.css';
import Usernameform from './components/login/UsernameForm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Usernameform onSubmit={(username) => alert(username)} />
			</div>
		);
	}
}

export default App;
