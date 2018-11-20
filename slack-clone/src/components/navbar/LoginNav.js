import React from 'react';
import styled from 'styled-components';
import SlackLogo from './SlackLogo.PNG';

const loginNav = () => {
	// these might become links some day
	const nav = [ 'Why Slack?', 'Solutions', 'Resources', 'Pricing' ];

	return (
		<StyledContainer>
			<img alt="slacklogo" src={SlackLogo} />
			{/* this just maps out the fake links for now */}
			{nav.map((link, idx) => {
				return (
					<StyledATag href="/" key={idx}>
						{link}
					</StyledATag>
				);
			})}
		</StyledContainer>
	);
};

export default loginNav;

export const StyledContainer = styled.div`
	width: 550px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin: 20px auto;
`;

export const StyledATag = styled.a`
	margin-right: 20px;
	text-decoration: none;
	color: #6d6f7b;

	&:hover {
		font-weight: 700;
		color: #000000;
	}
`;
