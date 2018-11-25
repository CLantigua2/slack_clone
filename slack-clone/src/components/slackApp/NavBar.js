import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
	return (
		<StyledContainer>
			<div>
				<h3># Channel Name</h3>
			</div>
			<StyledIconCont>
				<i className="fas fa-phone" />
				<i className="fas fa-info-circle" />
				<i className="fas fa-cog" />
				<StyledInput type="text" placeholder="🍳 Search..." />
				<i className="fas fa-at" />
				<i className="far fa-star" />
				<i className="fas fa-ellipsis-v" />
			</StyledIconCont>
		</StyledContainer>
	);
};

export default NavBar;

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 220px;
	margin-right: 0px;
	background: #fff;
	padding: 5px;
	height: 100%;
	box-shadow: inset 1px 0 0 0 #e8e8e8;
	box-sizing: border-box;
	line-height: 1rem;
	font-size: 16px;
	font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
	position: sticky;
	top: 0;
	border-bottom: 1px dotted #e5e5e5;
`;

const StyledIconCont = styled.div`
	margin: 20px;
	display: flex;
	justify-content: space-around;
	width: 500px;
	align-items: center;
	color: #797a7c;
	fill: #797a7c;
`;

const StyledInput = styled.input`
	padding: 2px 0;
	height: 34px;
	width: 303px;
	border-radius: .35rem;
	border: 1px solid #919193;
	font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
	:hover {
		border-color: #717274;
	}
`;
