import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
	return (
		<StyledButton>
			<span>{props.children}</span>
		</StyledButton>
	);
};

export default Button;

export const StyledButton = styled.button`
	display: inline-block;
	border-radius: 4px;
	background-color: #3f46ad;
	font-weight: bold;
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
