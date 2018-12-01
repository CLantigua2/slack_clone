import React from 'react';
import BodyContent from './BodyContent';
import Sidebar from './Sidebar';
import UsernameForm from './UsernameForm';

const LogContainer = () => {
	return (
		<React.Fragment>
			<UsernameForm />
			<BodyContent />
			<Sidebar />
		</React.Fragment>
	);
};

export default LogContainer;
