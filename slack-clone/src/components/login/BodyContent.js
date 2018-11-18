import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import channels from './img/channels.png';
import search from './img/search.png';
import integrations from './img/integrations.png';
import security from './img/security.png';

const BodyContent = () => {
	return (
		<div>
			<StyledContainer>
				<StyledHeading>The hub for your team and your work</StyledHeading>
				<StyledP>
					Slack is a place where your team comes together to collaborate, important information can be found
					by the right people, and your tools pipe in information when and where you need it.
				</StyledP>
			</StyledContainer>
			<StyledBodyContainer>
				<StyledBodyContent>
					<StyledImgTag src={channels} alt="communication" />
					<StyledH4>Channels</StyledH4>
					<p>
						Communication in Slack happens in channels, organized by project, topic, team, or whatever makes
						sense for you.
					</p>
				</StyledBodyContent>
				<StyledBodyContent>
					<StyledImgTag src={search} alt="communication" />
					<StyledH4>Search</StyledH4>
					<p>
						Conversations in Slack are searchable by everyone, so you can tap into company knowledge and
						find information when you need it.
					</p>
				</StyledBodyContent>
				<StyledBodyContent>
					<StyledImgTag src={integrations} alt="communication" />
					<StyledH4>Integrations</StyledH4>
					<p>
						Slack works with the tools and services you already use every day. Pipe in information or take
						action without leaving Slack.
					</p>
				</StyledBodyContent>
				<StyledBodyContent>
					<StyledImgTag src={security} alt="communication" />
					<StyledH4>Security</StyledH4>
					<p>
						We take security seriously at Slack. We offer measures like 2FA and SSO to ensure the safety of
						your data and protect your organization.
					</p>
				</StyledBodyContent>
			</StyledBodyContainer>
			<Sidebar />
		</div>
	);
};

export default BodyContent;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	width: 850px;
	margin-bottom: 3%;
`;

export const StyledHeading = styled.h1`
	text-align: center;
	margin: 0;
	padding-top: 20%;
	font-family: "Times New Roman", Arial, Helvetica, sans-serif;
	font-size: 35px;
	color: #323648;
`;
export const StyledH4 = styled.h4`
	margin: 0;
	font-size: 20px;
	padding-top: 5%;
	color: #323648;
`;

export const StyledBodyContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto;
	width: 85%;
`;

export const StyledBodyContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
`;

export const StyledP = styled.p`font-size: 20px;`;

export const StyledImgTag = styled.img`align-self: flex-start;`;
