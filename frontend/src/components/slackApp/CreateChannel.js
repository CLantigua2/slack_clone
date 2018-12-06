import React from 'react';
import { Redirect } from 'react-router-dom';
import { connectStore } from '../../context/store';

class CreateChannel extends React.Component {
	render() {
		const { createChannel, handleChange, newChannelName, newChannelPurpose, creating } = this.props;
		if (creating === false) {
			return (
				<div>
					<h1>Create a channel</h1>
					<p>
						Channels are where your members communicate. They're best when organized around a topic -
						#leads, for example
					</p>
					<form action="submit" onSubmit={createChannel}>
						<label htmlFor="channel">Name</label>
						<input
							type="text"
							name="newChannelName"
							value={newChannelName}
							placeholder="Channel name..."
							onChange={handleChange}
						/>
						<p>Names must be lowercase, without spaces or periods, and shorter than 22 characters</p>
						<label htmlFor="purpose">
							Purpose <span>{`(optional)`}</span>
						</label>
						<button>Cancel</button> <button>Create Channel</button>
						<input
							type="tex"
							name="newChannelPurpose"
							value={newChannelPurpose}
							placeholder="Add a purpose..."
							onChange={handleChange}
						/>
					</form>
				</div>
			);
		} else {
			return <Redirect to="/slackapp" />;
		}
	}
}

export default connectStore(CreateChannel);
