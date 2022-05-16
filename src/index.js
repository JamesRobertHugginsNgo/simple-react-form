import React from 'react';
import PropTypes from 'prop-types';

import Form from './components/Form';

function SimpleReactForm({
	type = 'form',
	data,
	updateData,
	types,
	...props
}) {
	const componentTypes = Object.assign({
		'form': Form
	}, types);

	return React.createElement(
		componentTypes[type] || componentTypes['form'],
		{
			data,
			updateData,
			types,
			...props
		}
	);
}

SimpleReactForm.propTypes = {
	type: PropTypes.string,
	data: PropTypes.object,
	updateData: PropTypes.func,
	types: PropTypes.object
};

export default SimpleReactForm;
