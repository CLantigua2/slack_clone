import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';

class UsernameForm extends React.Component {
	render() {
		const { verifyUser, handleChange, handleSubmit, loginName, loginPW } = this.props;
		return (
			<StyledContainer>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInput
						type="text"
						name="loginName"
						value={loginName}
						placeholder="Username..."
						onChange={handleChange}
					/>
					<StyledInput
						type="text"
						name="loginPW"
						value={loginPW}
						placeholder="Email..."
						onChange={handleChange}
					/>
					<StyledButton type="submit">
						<span>Login</span>
					</StyledButton>
				</StyledForm>
			</StyledContainer>
		);
	}
}

export default connectStore(UsernameForm);

export const StyledContainer = styled.div`
	display: flex;
	width: 500px;
	height: 500px;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	margin: 20px;
	padding: 20px;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: 15px auto;
	justify-content: center;
	margin: 20px;
	padding: 20px;
`;

export const StyledInput = styled.input`
	margin: 10px;
	padding: 5px;
`;

export const StyledButton = styled.button`
display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

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
}`;
