import React from 'react';
import styled from 'styled-components';
import { connectStore } from '../../context/store';

class NavBar extends React.Component {
	render() {
		const { channel } = this.props;
		return (
			<StyledContainer>
				{channel.length !== 0 ? (
					channel.map((chan) => {
						return (
							<StyledContainer key={chan.id}>
								<h3>#{chan.channel}</h3>
							</StyledContainer>
						);
					})
				) : (
					<StyledContainer>
						<h3>Select a channel</h3>
					</StyledContainer>
				)}
				<StyledIconCont>
					<input type="text" placeholder="🍳 Search..." />

					<i className="fas fa-ellipsis-v" />
				</StyledIconCont>
			</StyledContainer>
		);
	}
}

export default connectStore(NavBar);

const StyledContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 0px;
	background: #fff;
	padding: 5px;
	width: 100%;
	height: 50px;
	box-sizing: border-box;
	line-height: 1rem;
	font-size: 16px;
	font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
	position: sticky;
	top: 0;
	border-bottom: 1px dotted #e5e5e5;
	input {
		padding: 2px 0;
		height: 34px;
		width: 303px;
		border-radius: .35rem;
		border: 1px solid #919193;
		font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
		transition: 0.3s ease-in-out;
		&:hover {
			border-color: #717274;
		}
		&:focus {
			border: 1px solid #919193;
			border-radius: .35rem;
			transform: scaleX(1.15) scaleY(1.1);
			z-index: 3;
		}
	}
`;

const StyledIconCont = styled.div`
	margin-right: 20px;
	display: flex;
	justify-content: space-around;
	width: 800px;
	align-items: center;
	color: #797a7c;
	fill: #797a7c;
`;
