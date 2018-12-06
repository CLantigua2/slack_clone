import axios from 'axios';

const endpoint = 'http://localhost:9000/api/';

//////////////////////// User actions //////////////////////////

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
		.get(`${endpoint}user/:${id}`)
		.then((res) => {
			this.setState({ userStuff: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
}

// handles all form typing for the site
export function handleChange(e) {
	this.setState({ [e.target.name]: e.target.value });
}

// handls user sign in from the front page
export function signIn(e) {
	e.preventDefault();
	const { userLog, passLog } = this.state;
	if (userLog === '' || passLog === '') {
		alert('username and password is required');
	} else {
		axios
			.post(endpoint + 'login', { username: userLog, password: passLog })
			.then((res) => {
				!res.data.token ? this.setState({ loading: true }) : localStorage.setItem('jwt', res.data.token);
				this.setState({ userLog: '', passLog: '', loggedIn: true });
			})
			.catch((err) => {
				console.log('ERROR', err);
			});
	}
}

// get all users into state
export function getAllUsers() {
	const endpoint = 'http://localhost:9000/api/';
	// gets a list of all the users in the server
	axios
		.get(`${endpoint}users`)
		.then((res) => {
			const { token } = res.data;
			if (token) {
				this.setState({ allUsers: res.data });
			} else {
				return null;
			}
		})
		.catch((err) => {
			console.log(err);
		});
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
						lastname: '',
						loggedIn: true
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

///////////////// channel actions ///////////////////

export function getAllChannels() {
	axios
		.get(endpoint + 'channels')
		.then((res) => {
			if (res.status === 200) {
				this.setState({
					channels: res.data
				});
			} else {
				throw new Error('its broken');
			}
		})
		.catch((err) => {
			console.dir(err);
		});
}

export function createChannel(e) {
	e.preventDefault();
	const { newChannelName, newChannelPurpose } = this.state;

	if (!newChannelName) {
		alert('Please fill out channel name');
	} else {
		axios
			.post(endpoint + 'createchannel', {
				channel: newChannelName,
				purpose: newChannelPurpose
			})
			.then((res) => {
				if (res.status === 201) {
					this.setState({
						newChannelName: '',
						newChannelPurpose: '',
						creating: true
					});
				} else {
					throw new Error('its broken');
				}
			})
			.then(() => {
				this.setState({
					creating: false
				});
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

export function getAChannel(channel) {
	axios
		.get(`${endpoint}channels/${channel}`)
		.then((res) => {
			this.setState({ channel: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
}
