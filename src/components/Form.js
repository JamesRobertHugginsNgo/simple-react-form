import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';

function Form({
	id,
	sections = [],
	data,
	updateData,
	types
}) {
	const componentTypes = Object.assign({
		'section': Section
	}, types);

	return (
		<form id={id}>
			{sections.map(({ type = 'section', ...section }, key) => React.createElement(
				componentTypes[type] || componentTypes['section'],
				{
					type,
					data,
					updateData,
					types,
					key,
					...section
				}
			))}
		</form>
	);
}

Form.propTypes = {
	id: PropTypes.string,
	sections: PropTypes.arrayOf(PropTypes.object),
	data: PropTypes.object,
	updateData: PropTypes.func,
	types: PropTypes.object
};

export default Form;
