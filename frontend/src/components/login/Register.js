import React from 'react';
import styled from 'styled-components';
import logo from '../navbar/SlackLogo.PNG';
import { connectStore } from '../../context/store';
import { Redirect, Link } from 'react-router-dom';
import Spinner from '../loading/spinner';

export const message = {
	fillOutAll: 'Please fill out all required fields'
};
// this is the sidebar component for the main login page
class Register extends React.Component {
	render() {
		const {
			username,
			password,
			handleChange,
			registerUser,
			firstname,
			lastname,
			loggedIn,
			incorrect,
			loading
		} = this.props;
		if (loggedIn === false) {
			return (
				<StyledSideBar>
					<Link to="/">Home</Link>
					<div>
						<h1>Welcome to</h1>
						<img src={logo} alt="slack logo" />
						<h2>Built for every team</h2>
						<p>
							No matter your job title or department, Slack can help your team work together and get
							things done.
						</p>
						<p>
							Millions of people around the world have already made Slack the place where their work
							happens.
						</p>
						<h2>Register now</h2>
						{/* registerUser posts user data to the server */}
						<StryledForm action="submit" onSubmit={registerUser}>
							<StyledInput
								type="text"
								name="username"
								value={username}
								placeholder="Username..."
								onChange={handleChange}
							/>
							<StyledInput
								type="password"
								name="password"
								value={password}
								placeholder="Password..."
								onChange={handleChange}
							/>
							<StyledInput
								type="text"
								name="firstname"
								value={firstname}
								placeholder="First Name..."
								onChange={handleChange}
							/>
							<StyledInput
								type="text"
								name="lastname"
								value={lastname}
								placeholder="Last Name..."
								onChange={handleChange}
							/>
							<StyledButton type="submit">
								<span>{loading === false ? 'Register' : <Spinner />}</span>
							</StyledButton>
						</StryledForm>
					</div>
					<StyledP>{incorrect === 3 ? message.fillOutAll : null}</StyledP>
				</StyledSideBar>
			);
		} else {
			return <Redirect to="/slackapp" />;
		}
	}
}

// connects this component to the context store
export default connectStore(Register);

const StyledP = styled.p`
	color: red;
	margin-left: 40px;
`;

export const StyledSideBar = styled.div`
	width: 600px;
	box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.41);

	margin: 15% auto;
	padding: 20px;
	overflow-x: hidden;
	transition: 0.3s ease-in-out;
	border-radius: 10px;
	background-color: #ffffff;
`;

const StryledForm = styled.form`
	padding: 10px;
	display: flex;
	flex-direction: column;
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
	background-color: #0091ca;
	border: none;
	color: #ffffff;
	text-align: center;
	font-size: 18px;
	padding: 10px;
	width: 120px;
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
