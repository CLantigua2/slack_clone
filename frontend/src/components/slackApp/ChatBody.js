import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';

const ChatBody = () => {
	return (
		<React.Fragment>
			{this.props.userStuff.map((user) => {
				return (
					<div key={user.id}>
						<h3>{user.username}</h3>
						<p>I'm a chat body with thingys written inside of me</p>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default connectStore(ChatBody);
