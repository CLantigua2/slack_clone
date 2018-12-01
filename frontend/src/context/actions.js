import axios from 'axios';

const endpoint = 'http://localhost:9000/api/';

// gets a list of all the users in the server
export function getAllUserInfo() {
	axios
		.get(`${endpoint}users`)
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
		.get(`${endpoint}${id}`)
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
	const { username, password } = this.state;
	if (username === '' || password === '') {
		alert('username and password is required');
	} else {
		axios
			.post(endpoint + 'login', { username, password })
			.then((res) => {
				localStorage.setItem('jwt', res.data.token);
				this.setState({ username: '', password: '' });
			})
			.catch((err) => {
				console.log('ERROR', err);
			});
	}
}

// handles the submit for the sidebar only
export function sidebarHandler() {
	this.setState({ sidebar: !this.state.sidebar });
}

// sends user register name and email to server
export function registerUser(e) {
	e.preventDefault();
	const { username, password, firstname, lastname } = this.state;

	if (!username || !password || !firstname || !lastname) {
		alert('Please enter all of your information');
	} else {
		axios
			.post(`${endpoint}register`, { username, password, firstname, lastname })
			.then((res) => {
				if (res.status === 201) {
					this.setState({
						username: '',
						password: '',
						firstname: '',
						lastname: ''
					});
				} else {
					throw new Error('its broken');
				}
			})
			.catch((err) => {
				this.setState({
					state: { ...this.state }
				});
				console.dir(err);
			});
	}
	e.target.reset();
}
