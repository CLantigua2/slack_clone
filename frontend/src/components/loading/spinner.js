import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Spinner = () => {
	return (
		<React.Fragment>
			<StyledSpinner />
		</React.Fragment>
	);
};

export default Spinner;

const KeyframesSpin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;
const StyledSpinner = styled.div`
	border-radius: 43%;
	border-top: 5px solid #3498db;
	width: 14px;
	height: 12px;
	-webkit: spin 1s linear infinite; /* Safari */
	animation: ${KeyframesSpin} 0.5s linear infinite;
	/* Safari */
`;
