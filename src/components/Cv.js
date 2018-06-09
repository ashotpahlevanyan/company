import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JsonData from './JsonData';

class Cv extends Component {

	render() {
		const ashotData = JsonData.AshotCVItems;
		return(
			<div className="text-left">
				<pre>{JSON.stringify(ashotData, null, 3)}</pre>
			</div>
		);
	}
}

Cv.propTypes = {
	items: PropTypes.array.isRequired
};



export default Cv;