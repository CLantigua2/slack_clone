import React from 'react';
import styled from 'styled-components';

const SlackSide = () => {
	return (
		<StyledContainer>
			<div>
				<StyledHeader>Lambda School</StyledHeader>
				<StyledPTag>Carlos Lantigua</StyledPTag>
			</div>
			<form action="button">
				<StyledButton>Jump to..</StyledButton>
			</form>
		</StyledContainer>
	);
};

export default SlackSide;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 15px;
	width: 205px;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: #000e0f;
`;

const StyledHeader = styled.h3`
	color: #2abec7;
	margin: 0;
`;

const StyledPTag = styled.p`
	color: #1b8288;
	margin: 0;
	padding: 0;
	display: list-item;
	/* This has to be "list-item"                                               */
	list-style-type: disc; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
	list-style-position: inside; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position */
`;

const StyledButton = styled.button`
	background: #000;
	color: #1b8288;
	width: 100%;
	border: 0;
	display: flex;
	justify-content: flex-start;
	margin: 10px 0;
	font-size: 16px;
`;
