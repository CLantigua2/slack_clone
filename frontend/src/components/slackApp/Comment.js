import React from 'react';
import styled from 'styled-components';
import { connectStore } from '../../context/store';

class Comment extends React.Component {
	render() {
		const { channel } = this.props;
		if (channel.length === 0) {
			return null;
		} else {
			return (
				<StyledFooter>
					<StyledForm action="submit">
						<StyledButton>+</StyledButton>
						<StyledInput type="text" placeholder="#channel name" />
					</StyledForm>
				</StyledFooter>
			);
		}
	}
}

export default connectStore(Comment);

const StyledFooter = styled.div`
	/* position: absolute;
	bottom: 0; */
	width: 95%;
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
	padding: 0 15px;
	height: auto;
	font-size: 30px;
	max-height: none;
	min-height: 41px;
	outline: 0;
	background: #fff;
	resize: none;
	box-shadow: none;
`;

const StyledInput = styled.input`
	font-size: 20px;
	height: auto;
	max-height: none;
	min-height: 30px;
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
