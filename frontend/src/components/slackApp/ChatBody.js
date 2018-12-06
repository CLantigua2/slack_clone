import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';

class ChatBody extends React.Component {
	render() {
		const { channel } = this.props;
		if (channel.length === 0) {
			return (
				<div>
					<h1>Click a channel from the side menu please.</h1>
				</div>
			);
		} else {
			return channel.map((chan) => {
				return (
					<StyledContainer key={chan.id}>
						<p>{chan.purpose}</p>
					</StyledContainer>
				);
			});
		}
	}
}

export default connectStore(ChatBody);

export const StyledContainer = styled.div`
	min-height: 87vh;
	max-height: 500px;
	overflow-y: auto;
`;
