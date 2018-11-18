import axios from 'axios';

// verify if a user has registered
export function verifyUser() {
	// if user has registered, let them through
	// else give them a warning
}

// handles all form typing for the site
export function handleChange(e) {
	this.setState({ [e.target.name]: e.target.value });
}

// will handle login and maybe other stuff
export function handleSubmit(e) {
	e.preventDefault();
	console.log(this.state);
}

export function sidebarHandler() {
	this.setState({ sidebar: !this.state.sidebar });
}
