import axios from 'axios';

// gets a list of all the users in the server
export function getAllUserInfo() {
	axios
		.get('http://localhost:9000/userInfo/')
		.then((res) => {
			this.setState({ allUsers: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
}

// get a single users info and sends to userInfo in store
export function getUserInfo(id) {
	axios
		.get(`http://localhost:9000/userInfo/${id}`)
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
	const { logUsername, logPassword, allUsers } = this.state;
	if (logUsername === '' || logPassword === '') {
		alert('Please fill out both fields');
	} else {
		if (allUsers.includes({ logUsername }, { logPassword })) {
			alert('you are logged in');
		} else {
			alert("That user doesn't exist");
		}
	}
}

// handles the submit for the sidebar only
export function sidebarHandler() {
	this.setState({ sidebar: !this.state.sidebar });
}

// sends user register name and email to server
export function registerUser(e) {
	e.preventDefault();
	const { regPassword, regUsername } = this.state;
	if (regUsername === '' || regPassword === '') {
		alert('Please fill in the fields completely');
	} else {
		axios
			.post('http://localhost:9000/register', { password: regPassword, username: regUsername })
			.catch((err) => console.log(err));
	}
}
