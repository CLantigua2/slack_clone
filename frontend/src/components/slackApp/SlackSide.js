import React from 'react';
import styled from 'styled-components';
import { connectStore } from '../../context/store';
import { Link } from 'react-router-dom';

class SlackSide extends React.Component {
	componentDidMount() {
		this.props.getAllChannels();
	}
	render() {
		return (
			<StyledContainer>
				<div>
					<StyledHeader>Lambda School..</StyledHeader>
					<StyledPTag>Carlos</StyledPTag>
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
						<StyledTools>All Unreads</StyledTools>
					</StyledToolDiv>

					<StyledToolDiv>
						<StyledIcon className="far fa-comment-dots" />
						<StyledTools>All Threads</StyledTools>
					</StyledToolDiv>
				</StyledButtonCont>
				<StyledAddChannelDiv>
					<StyledH3>Channels</StyledH3>
					<StyledNewChannel>
						<Link to="/createchannel">&#43;</Link>
					</StyledNewChannel>
				</StyledAddChannelDiv>
				{this.props.channels.map((channel) => {
					return (
						<div key={channel.id}>
							<StyledH4>
								<Link to={`/slackapp/${channel.channel}`}># {channel.channel}</Link>
							</StyledH4>
						</div>
					);
				})}
			</StyledContainer>
		);
	}
}

export default connectStore(SlackSide);

const StyledNewChannel = styled.button`
	color: #2abec7;
	background: transparent;
	border: 1px solid #2abec7;
	border-radius: 50%;
	margin-left: 87px;
	a {
		text-decoration: none;
		color: #2abec7;
		font-weight: bold;
	}
`;

const StyledAddChannelDiv = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
`;

const StyledH3 = styled.h3`
	color: #2abec7;
	margin: 0;
	padding: 0;
`;
const StyledH4 = styled.h4`
	color: #2abec7;
	margin: 0;
	padding: 0;
	a {
		text-decoration: none;
		color: #2abec7;
	}
`;

const StyledContainer = styled.div`
	overflow-y: scroll;
	background: #ffffff;
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
	color: #2abec7;
	margin: 0;
	padding: 0;
	display: list-item;
	list-style-type: disc;
	list-style-position: inside;
`;

const StyledButton = styled.button`
	color: #2abec7;
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
	color: #2abec7;
`;

const StyledTools = styled.button`
	font-weight: bold;
	display: flex;
	justify-content: flex-start;
	background: transparent;
	border: 0;
	font-size: 17px;
	margin: 3px 0;
	color: #2abec7;
`;

const StyledToolDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledIcon = styled.i`color: #0d4347;`;
