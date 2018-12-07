import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connectStore } from '../../context/store';
import styled from 'styled-components';
import Button from '../tools/Button';

class CreateChannel extends React.Component {
	render() {
		const { createChannel, handleChange, newChannelName, newChannelPurpose, creating, RedirectIt } = this.props;
		if (creating === false) {
			return (
				<StyledContainer>
					<h1>Create a channel</h1>
					<p>
						Channels are where your members communicate. They're best when organized around a topic -
						#leads, for example
					</p>
					<StyledForm action="submit" onSubmit={createChannel}>
						<StyledInput
							type="text"
							name="newChannelName"
							value={newChannelName}
							placeholder="Channel name..."
							onChange={handleChange}
						/>
						<StyledPTags>Channel names will be lower cased and have no spaces.</StyledPTags>

						<StyledInput
							type="tex"
							name="newChannelPurpose"
							value={newChannelPurpose}
							placeholder="Add a purpose..."
							onChange={handleChange}
						/>
						<StyledPTags>Optional</StyledPTags>
						<StyledButtonDiv>
							<Link to="slackapp">
								<Button type="button">Cancel</Button>
							</Link>
							<Button success type="submit">
								Submit
							</Button>
						</StyledButtonDiv>
					</StyledForm>
				</StyledContainer>
			);
		} else {
			return <Redirect to="slackapp" />;
		}
	}
}

export default connectStore(CreateChannel);

const StyledPTags = styled.p`
	font-family: 'Montserrat', sans-serif;
	padding: 0;
	margin: 10px 0 30px 15px;
	font-size: 12px;
	font-style: italic;
	color: #757575;
`;

const StyledButtonDiv = styled.div`
	margin: 0 auto;
	margin-top: 25px;
	width: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const StyledInput = styled.input`
	font-style: italic;
	font-size: 14px;
	padding: 5px;
	border: 0;
	border-bottom: 2px solid rgba(200, 0, 0, 0.2);
	margin-bottom: 0;
`;

const StyledContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
	width: 600px;
	height: 100%;
	padding: 25px;
	margin: 0 auto;
	justify-items: center;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 16px;
`;
