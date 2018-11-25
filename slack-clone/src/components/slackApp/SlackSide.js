import React from 'react';
import styled from 'styled-components';

const SlackSide = () => {
	return (
		<StyledContainer>
			<div>
				<StyledHeader>Lambda School..</StyledHeader>
				<StyledPTag>Carlos Lantigua</StyledPTag>
			</div>
			<div>
				<form action="button">
					<StyledButtonCont>
						<StyledToolDiv>
							<StyledIcon className="far fa-list-alt" />
							<StyledButton>Jump to..</StyledButton>
						</StyledToolDiv>
					</StyledButtonCont>
				</form>
			</div>
			<StyledButtonCont>
				<StyledToolDiv>
					<StyledIcon className="fas fa-stream" />
					<StyledTools active>All Unreads</StyledTools>
				</StyledToolDiv>

				<StyledToolDiv>
					<StyledIcon className="far fa-comment-dots" />
					<StyledTools>All Threads</StyledTools>
				</StyledToolDiv>
			</StyledButtonCont>
		</StyledContainer>
	);
};

export default SlackSide;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 15px;
	width: 200px;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: #000e0f;
	overflow: hidden;
	z-index: 200;
`;

const StyledHeader = styled.h3`
	color: #2abec7;
	margin: 0;
	overflow: hidden;
	max-width: 100%;
`;

const StyledPTag = styled.p`
	color: #1b8288;
	margin: 0;
	padding: 0;
	display: list-item;
	list-style-type: disc;
	list-style-position: inside;
`;

const StyledButton = styled.button`
	color: #1b8288;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	display: flex;
	justify-content: space-between;
	position: relative;
	top: 6px;
	margin-left: 14px;
	padding: 4px 8px;
	border-radius: 4px;
	width: 192px;
	opacity: 1;
	transition: color .1s ease-out;
	background: rgb(0, 0, 0);
	line-height: 1.4375;
	border: 0;
	font: inherit;
	margin: 0;
	text-align: initial;
	vertical-align: initial;
	cursor: pointer;
	align-items: flex-start;
`;

const StyledButtonCont = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	margin-top: 28px;
	justify-content: flex-start;
`;

const StyledTools = styled.button`
	display: flex;
	justify-content: flex-start;
	/* color: #2abec7; */
	/* font-weight: bold; */
	background: transparent;
	border: 0;
	font-size: 17px;
	margin: 3px 0;

	${(props) => (!props.active ? `font-weight: normal; color: #1b8288;` : `color: #2abec7; font-weight: bold;`)};
`;

const StyledToolDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledIcon = styled.i`color: #0d4347;`;
