import React from 'react';
import SlackSide from './SlackSide';
import NavBar from './NavBar';
import Comment from './Comment';
import styled from 'styled-components';

const SlackContainer = () => {
	return (
		<StyledContainer>
			<SlackSide />
			<NavBar />
			<Comment />
		</StyledContainer>
	);
};

export default SlackContainer;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-left: 220px;
`;
