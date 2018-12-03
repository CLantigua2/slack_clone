import React from 'react';
import spinner from './spinner.gif';

class Spinner extends React.Component {
	render() {
		return (
			<div>
				<img src={spinner} alt="Loading..." style={{ width: '200px', margin: '40px auto', display: 'block' }} />
			</div>
		);
	}
}

export default Spinner;
