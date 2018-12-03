import React from 'react';

class CreateChannel extends React.Component {
	render() {
		return (
			<div>
				<h1>Create a channel</h1>
				<p>
					Channels are where your members communicate. They're best when organized around a topic - #leads,
					for example
				</p>
				<form action="submit">
					<label htmlFor="channel">Name</label>
					<input type="text" name="channel" />
					<p>Names must be lowercase, without spaces or periods, and shorter than 22 characters</p>
					<label htmlFor="purpose">
						Purpose <span>{`(optional)`}</span>
					</label>
					<button>Cancel</button> <button>Create Channel</button>
					<input type="text" name="channel" />
				</form>
			</div>
		);
	}
}

export default CreateChannel;
