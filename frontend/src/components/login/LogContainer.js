import React from 'react';
import BodyContent from './BodyContent';
import UsernameForm from './UsernameForm';

const LogContainer = () => {
	return (
		<React.Fragment>
			<UsernameForm />
			<BodyContent />
		</React.Fragment>
	);
};

export default LogContainer;
