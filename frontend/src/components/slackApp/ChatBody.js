import React from 'react';
import { connectStore } from '../../context/store';
import styled from 'styled-components';

const ChatBody = () => {
	return (
		<StyledContainer>
			<h1>chat box here!</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quidem corrupti ipsa? Fugit doloribus,
				voluptatum fugiat saepe, molestiae velit accusantium, nihil quos dignissimos impedit qui earum veniam
				expedita provident sunt.
			</p>
		</StyledContainer>
	);
};

export default connectStore(ChatBody);

export const StyledContainer = styled.div`
	min-height: 87vh;
	max-height: 500px;
	overflow-y: auto;
`;
