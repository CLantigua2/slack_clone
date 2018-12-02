import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<div>
			{/* spinner to be used for when data is loading */}
			<img src={spinner} alt="Loading..." style={{ width: '200px', margin: '40px auto', display: 'block' }} />
		</div>
	);
};

export default Spinner;
