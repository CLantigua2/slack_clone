import React from 'react';
import SlackSide from './SlackSide';
import NavBar from './NavBar';
import Comment from './Comment';
import styled from 'styled-components';
import ChatBody from './ChatBody';

const SlackContainer = () => {
	return (
		<StyledContainer>
			<SlackSide />
			<NavBar />
			<ChatBody />
			<Comment />
		</StyledContainer>
	);
};

export default SlackContainer;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin-left: 220px;
`;
