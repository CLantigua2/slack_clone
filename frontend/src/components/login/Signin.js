import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';
import SlackImage from './home_illo.png';
import { Link, Redirect } from 'react-router-dom';
import Button from '../tools/Button';
import Spinner from '../loading/spinner';

export const message = {
	bothFields: 'Please provide a username and password',
	badCreds: 'Incorrect login information'
};
// home page form
class Signin extends React.Component {
	// handls user sign in from the front page

	render() {
		// all of this is coming from the context store
		const { handleChange, userLog, passLog, signIn, loggedIn, loading, incorrect } = this.props;
		if (loggedIn) {
			return <Redirect to="/slackapp" />;
		}
		return (
			<StyledContainer>
				{/* this is the main login page */}
				<StyledImg src={SlackImage} alt="Slack Workers" />
				<StyledForm onSubmit={signIn}>
					<StyledH1>Where Work Happens</StyledH1>
					<p>
						When your team needs to kick off a project, hire a new employee, deploy some code, review a
						sales contract, finalize next year's budget, measure an A/B test, plan your next office opening,
						and more, Slack has you covered.
					</p>
					<StyledInput
						type="text"
						name="userLog"
						value={userLog}
						placeholder="Username..."
						// handles form value changes
						onChange={handleChange}
					/>

					<StyledInput
						type="password"
						name="passLog"
						value={passLog}
						placeholder="Password..."
						// handles form value changes
						onChange={handleChange}
					/>
					<div>
						<Button>{loading === false ? 'Login' : <Spinner />}</Button>
						{/* sidebarHandler posts registration data to the server || currently being worked on */}
						<StyledRegister to="/register">
							<span>Register</span>
						</StyledRegister>
					</div>
					<div>
						<StyledP>
							{incorrect === 1 ? (
								message.bothFields
							) : incorrect === 2 ? (
								message.badCreds
							) : incorrect === 0 ? null : null}
						</StyledP>
					</div>
				</StyledForm>
			</StyledContainer>
		);
	}
}

// connect context store to this component using HOC
export default connectStore(Signin);

const StyledP = styled.p`
	color: red;
	margin-left: 40px;
`;

export const StyledContainer = styled.div`
	display: flex;
	width: 100%;
	height: 500px;
	flex-direction: row;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	padding-top: 5%;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 600px;
	margin: 15px auto;
	margin: 20px;
	padding: 20px;
`;

export const StyledInput = styled.input`
	margin: 10px;
	padding: 5px;
	border: 1px solid slategray;
	border-radius: 5px;
`;

export const StyledRegister = styled(Link)`
  background-color: #4CAF50;
  width: 120px;
	display: inline-block;
	border-radius: 4px;
	border: none;
	font-weight: bold;
	color: #ffffff;
	text-align: center;
	font-size: 18px;
	padding: 10px;
	transition: all 0.5s;
	cursor: pointer;
	margin: 5px;

	span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}

	span:after {
		content: '\00bb';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}

	&:hover span {
		padding-right: 25px;
	}

	&:hover span:after {
		opacity: 1;
		right: 0;
	}
`;

export const StyledH1 = styled.h1`
	font-family: "Times New Roman", Georgia, serif;
	font-weight: 900;
	line-height: 1.05;
	letter-spacing: normal;
	margin-bottom: 10px;
	font-size: 58px;
	color: #323648;
`;

export const StyledImg = styled.img`height: auto;`;
