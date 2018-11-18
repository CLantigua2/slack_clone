import axios from 'axios';

// verify if a user has registered
export function verifyUser() {
	// if user has registered, let them through
	// else give them a warning
}

export function getAllUserInfo() {
	axios
		.get('http://localhost:9000/api/userInfo/')
		.then((res) => {
			this.setState({ allUsers: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
}

export function getUserInfo(id) {
	axios
		.get(`http://localhost:9000/api/userInfo/${id}`)
		.then((res) => {
			this.setState({ userInfo: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
}

// handles all form typing for the site
export function handleChange(e) {
	this.setState({ [e.target.name]: e.target.value });
}

// will handle login and maybe other stuff
export function handleSubmit(e) {
	e.preventDefault();
	const { loginName, loginPW } = this.state;
	if (!loginName || !loginPW) {
		alert('Please fill out both fields');
	} // needs to check whats in server and compare
}

export function sidebarHandler() {
	this.setState({ sidebar: !this.state.sidebar });
}

export function registerUser(e) {
	e.preventDefault();
	const { registerEmail, registerName } = this.state;
	if (registerName === '' || registerEmail === '') {
		alert('Please fill in the fields completely');
	} else {
		axios
			.post('http://localhost:9000/api/userInfo/create', { email: registerEmail, name: registerName })
			.catch((err) => console.log(err));
	}
}
