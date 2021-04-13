import React, { Fragment } from 'react';
import spinner from './spinner.gif'; //Todo: find a spinner gif from the internet when landed

export default () => {
	<Fragment>
		<img
			src={spinner}
			style={{ width: '200px', margin: 'auto', display: 'block' }}
			alt="Loading"
		/>
	</Fragment>;
};
