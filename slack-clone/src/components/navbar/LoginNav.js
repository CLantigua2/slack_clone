import React from 'react';
import styled from 'styled-components';
import SlackLogo from './SlackLogo';

const loginNav = () => {
	const nav = [ 'Why Slack?', 'Solutions', 'Resources', 'Pricing' ];
	const logo = SlackLogo;

	return (
		<StyledContainer>
			<img src={logo} />
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
	width: 100%;
	display: flex;
	flex-direction: row;
	margin: 20px;
	padding: 20px;
`;

export const StyledATag = styled.a`
	margin-right: 20px;
	text-decoration: none;
`;
