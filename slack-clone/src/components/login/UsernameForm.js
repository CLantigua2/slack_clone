import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';
import SlackImage from './home_illo.png';

class UsernameForm extends React.Component {
	render() {
		const { verifyUser, handleChange, handleSubmit, loginName, loginEmail } = this.props;
		return (
			<StyledContainer>
				<StyledImg src={SlackImage} alt="Slack Workers" />
				<StyledForm onSubmit={handleSubmit}>
					<StyledH1>Where Work Happens</StyledH1>
					<p>
						When your team needs to kick off a project, hire a new employee, deploy some code, review a
						sales contract, finalize next year's budget, measure an A/B test, plan your next office opening,
						and more, Slack has you covered.
					</p>
					<StyledInput
						type="text"
						name="loginName"
						value={loginName}
						placeholder="Username..."
						onChange={handleChange}
					/>
					<StyledInput
						type="text"
						name="loginEmail"
						value={loginEmail}
						placeholder="Email..."
						onChange={handleChange}
					/>
					<div>
						<StyledButton type="submit">
							<span>Login</span>
						</StyledButton>
						<StyledRegister type="submit">
							<span>Register</span>
						</StyledRegister>
					</div>
				</StyledForm>
			</StyledContainer>
		);
	}
}

export default connectStore(UsernameForm);

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

export const StyledButton = styled.button`
	display: inline-block;
	border-radius: 4px;
	background-color: #f4511e;
	border: none;
	color: #ffffff;
	text-align: center;
	font-size: 18px;
	padding: 10px;
	width: 100px;
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

export const StyledRegister = styled(StyledButton)`
  background-color: #4CAF50;
  width: 120px;
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
