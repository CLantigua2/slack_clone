import React from 'react';
import styled from 'styled-components';
import { connectStore } from '../../context/store';
import { NavLink, Link } from 'react-router-dom';

class SlackSide extends React.Component {
	render() {
		const { getAChannel, userStuff } = this.props;
		return (
			<StyledContainer>
				<div>
					<StyledHeader>Lambda School..</StyledHeader>
					<StyledPTag>{userStuff.username}</StyledPTag>
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

				<StyledAddChannelDiv>
					<StyledH3>Channels</StyledH3>
					<StyledNewChannel>
						<Link to="/createchannel">&#43;</Link>
					</StyledNewChannel>
				</StyledAddChannelDiv>
				{this.props.channels.map((channel, idx) => {
					return (
						<StyledMapDiv key={channel.id}>
							<StyledH4>
								<SyledNavLink
									className={channel.channel ? 'navLink' : null}
									activeClassName={channel.channel ? 'current' : null}
									strict
									to={`/slackapp/${channel.channel}`}
									onClick={() => getAChannel(channel.channel)}
								>
									<span>#</span>
									{channel.channel}
								</SyledNavLink>
							</StyledH4>
						</StyledMapDiv>
					);
				})}
			</StyledContainer>
		);
	}
}

export default connectStore(SlackSide);

const SyledNavLink = styled(NavLink)`
	color: #275d5f;
	span {
		margin-right: 5px;
	}
	&.current {
		color: #2abec7;
		font-weight: 700;
	}
`;

const StyledMapDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 80%;
`;

const StyledNewChannel = styled.button`
	color: #2abec7;
	background: transparent;
	border: 1px solid #2abec7;
	border-radius: 50%;
	margin-left: 80px;
	display: flex;
	flex-direction: row;
	a {
		color: #2abec7;
		text-decoration: none;
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
	margin-bottom: 10px;
	padding: 0;
`;
const StyledH4 = styled.h4`
	overflow: hidden;
	text-overflow: ellipsis;
	color: #275d5f;
	margin: 5px;
	padding: 0;
	a {
		text-decoration: none;
	}
`;

const StyledContainer = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	font-family: 'Montserrat', sans-serif;
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
	color: #275d5f;
	margin: 0;
	padding: 0;
	display: list-item;
	list-style-type: disc;
	list-style-position: inside;
	cursor: pointer;
	transition: 0.4s ease-in-out;
	&:hover {
		color: #2abec7;
	}
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

const StyledToolDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledIcon = styled.i`color: #0d4347;`;
