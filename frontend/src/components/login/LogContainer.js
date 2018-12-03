import React from 'react';
import BodyContent from './BodyContent';
import Signin from './Signin';
import Navbar from '../navbar/LoginNav';

const LogContainer = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Signin />
			<BodyContent />
		</React.Fragment>
	);
};

export default LogContainer;
