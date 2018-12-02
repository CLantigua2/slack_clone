import React from 'react';
import styled from 'styled-components';
import logo from '../navbar/SlackLogo.PNG';
import { connectStore } from '../../context/store';

// this is the sidebar component for the main login page
class Sidebar extends React.Component {
	render() {
		const { username, password, handleChange, registerUser, firstname, lastname } = this.props;
		// if the sidebar state is true present sidebar
		return (
			<StyledSideBar>
				<div>
					<h1>Welcome to</h1>
					<img src={logo} alt="slack logo" />
					<h2>Built for every team</h2>
					<p>
						No matter your job title or department, Slack can help your team work together and get things
						done.
					</p>
					<p>
						Millions of people around the world have already made Slack the place where their work happens.
					</p>
					<h2>Register now</h2>
					{/* registerUser posts user data to the server */}
					<form action="submit" onSubmit={registerUser}>
						<StyledInput
							type="text"
							name="username"
							value={username}
							placeholder="Username..."
							onChange={handleChange}
						/>
						<StyledInput
							type="text"
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
							<span>Register</span>
						</StyledButton>
					</form>
				</div>
			</StyledSideBar>
		);
	}
}

// connects this component to the context store
export default connectStore(Sidebar);

export const StyledSideBar = styled.div`
	height: 100%;
	width: 250px;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	background-color: #ffffff;
	border-left: 1px solid #583753;
	box-shadow: -4px 0px 48px -6px rgba(0, 0, 0, 0.75);
	padding: 20px;
	overflow-x: hidden;
	transition: 0.3s ease-in-out;
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
