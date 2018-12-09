import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';

class ChatBody extends React.Component {
	render() {
		const { channel } = this.props;
		if (channel.length === 0) {
			return (
				<StyledDiv>
					<h1>Click a channel from the side menu please.</h1>
				</StyledDiv>
			);
		} else {
			return channel.map((chan) => {
				return (
					<StyledContainer key={chan.id}>
						<StyledPTag>{chan.purpose}</StyledPTag>
					</StyledContainer>
				);
			});
		}
	}
}

export default connectStore(ChatBody);

const StyledDiv = styled.div`width: 60%;`;

const StyledPTag = styled.p`
	margin: 0;
	font-size: 12px;
`;

const StyledContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
	min-height: 90vh;
	max-height: 500px;
	overflow-y: auto;
`;
