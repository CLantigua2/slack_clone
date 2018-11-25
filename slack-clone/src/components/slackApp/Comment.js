import React from 'react';
import styled from 'styled-components';

const Comment = () => {
	return (
		<StyledFooter>
			<StyledForm action="submit">
				<StyledButton>+</StyledButton>
				<StyledInput type="text" placeholder="#channel name" />
			</StyledForm>
		</StyledFooter>
	);
};

export default Comment;

const StyledFooter = styled.div`
	position: absolute;
	bottom: 0;
	width: 90%;
	/* left: 0; */
	box-sizing: border-box;
	line-height: 1rem;
	font-size: 16px;
	display: block;
	border: 2px solid rgba(145, 145, 147, .7);
	border-radius: .375rem;
	margin: 10px 20px;
`;

const StyledForm = styled.form`
	display: flex;
	position: relative;
`;

const StyledButton = styled.button`
	color: #919193;
	padding: 3px 15px;
	height: auto;
	font-size: 40px;
	max-height: none;
	min-height: 41px;
	outline: 0;
	background: #fff;
	resize: none;
	box-shadow: none;
`;

const StyledInput = styled.input`
	font-size: 30px;
	height: auto;
	max-height: none;
	min-height: 41px;
	overflow: auto;
	margin: 0;
	width: 100%;
	border: transparent;
	background: #fff;
	resize: none;
	box-shadow: none;
	color: #2c2d30;
	padding-left: 10px;
`;
