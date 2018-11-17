import React from 'react';

class UsernameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	onChange = (e) => {
		this.setState({
			username: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.username);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="What is your username?" onChange={this.onChange} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default UsernameForm;
