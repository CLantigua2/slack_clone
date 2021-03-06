import axios from 'axios';

const endpoint = 'http://localhost:9000/api/';
axios.defaults.withCrdentials = true;
//////////////////////// User actions //////////////////////////

export function authenticate() {
	const token = localStorage.getItem('jwt');
	const options = {
		headers: {
			Authorization: token
		}
	};
	if (token) {
		axios
			.get(`${endpoint}users`, options)
			.then((res) => {
				if (res.status === 200 && res.data) {
					this.setState({ loggedIn: true, userStuff: res.data });
				} else {
					throw new Error();
				}
			})
			.catch((err) => {
				console.dir(err);
			});
	}
}

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
	this.setState({ loading: true });
	const { userLog, passLog } = this.state;
	if (userLog === '' || passLog === '') {
		this.setState({ loading: false, incorrect: 1 });
	} else {
		axios
			.post(endpoint + 'login', { username: userLog, password: passLog })
			.then((res) => {
				if (res.status === 200 && res.data) {
					// keeps loggedin users info in state

					// localStorage.setItem(('user', JSON.stringify(res.data)));
					this.setState({
						userStuff: {
							...res.data
						}
					});
				} else {
					// don't allow access
					this.setState({ loggedIn: false, loading: false });
					throw new Error();
				}
			})
			.then((res) => {
				// blanks out the origin login fields
				this.setState({ userLog: '', passLog: '', loggedIn: true, loading: false });
			})
			.catch((err) => {
				this.setState({ loading: false, incorrect: 2 });
				console.dir('ERROR', err);
			});
	}
}

// get all users into state
export function getAllUsers() {
	// gets a list of all the users in the server
	axios
		.get(`${endpoint}users`)
		.then((res) => {
			if (res.data.token) {
				this.setState({ allUsers: res.data, userStuff: res.data.token.username });
			} else {
				return null;
			}
		})
		.catch((err) => {
			console.log(err);
		});
	console.log(this.state.userStuff);
}

// sends user register name and email to server
export function registerUser(e) {
	e.preventDefault();
	this.setState({ loading: true });
	const { username, password, firstname, lastname } = this.state;
	if (!username || !password || !firstname || !lastname) {
		this.setState({ loading: false, incorrect: 3 });
	} else {
		axios
			.post(`${endpoint}register`, { username, password, firstname, lastname })
			.then((res) => {
				if (res.status === 201 && res.data) {
					this.setState({
						userStuff: {
							username,
							password,
							firstname,
							lastname
						},
						loading: false
					});
				} else {
					throw new Error('its broken');
				}
			})
			.then(() => {
				this.setState({
					username: '',
					password: '',
					firstname: '',
					lastname: '',
					loggedIn: true,
					loading: false,
					incorrect: ''
				});
			})
			.catch((err) => {
				this.setState({
					username: '',
					password: '',
					firstname: '',
					lastname: '',
					loggedIn: false,
					loading: false,
					incorrect: ''
				});
				console.dir(err);
			});
	}
	e.target.reset();
}

export function signOut() {
	localStorage.removeItem('jwt');
	this.setState({ loggedIn: false });
}

///////////////// channel actions ///////////////////

export function getAllChannels() {
	// get a list of all the channels
	authenticate();
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
	// create a single channel
	e.preventDefault();
	const { newChannelName, newChannelPurpose } = this.state;

	if (!newChannelName) {
		alert('Please fill out channel name');
	} else {
		axios
			.post(endpoint + 'createchannel', {
				channel: newChannelName.replace(/ /g, '_').toLowerCase(),
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
	// get a single channel
	axios
		.get(`${endpoint}channels/${channel}`)
		.then((res) => {
			this.setState({ channel: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
}
