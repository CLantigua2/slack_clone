import React from 'react';
import SlackSide from './SlackSide';
import NavBar from './NavBar';
import Comment from './Comment';
import styled from 'styled-components';
import ChatBody from './ChatBody';
import { connectStore } from '../../context/store';
import { withRouter } from 'react-router-dom';

class SlackContainer extends React.Component {
	componentDidMount() {
		// this.props.authenticate();
		this.props.getAllChannels();
	}
	componentDidUpdate(prevProps) {
		const { pathname } = this.props.location;
		if (pathname === '/' && pathname !== prevProps.location.pathname) {
		}
	}
	render() {
		return (
			<StyledContainer>
				<SlackSide />
				<NavBar />
				<ChatBody />
				<Comment />
			</StyledContainer>
		);
	}
}

export default connectStore(withRouter(SlackContainer));

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin-left: 220px;
`;
